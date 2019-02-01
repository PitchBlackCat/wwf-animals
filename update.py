from bs4 import BeautifulSoup
import urllib3

page = 1
url = 'https://www.worldwildlife.org/species/directory?page='
animals = []


def writeLine(f, line):
    f.write(line + '\n')


def getHtml(url):
    http = urllib3.PoolManager()
    r = http.request('GET', url)
    return r.data


def send_spiders(url):
    content = getHtml(url)
    soup = BeautifulSoup(content, features="html5lib")

    for row in soup.select('#content tr'):
        cells = row.select('td')

        if not cells:
            continue

        animals.append({
            'name': cells[0].text,
            'scientific': cells[1].text,
            'status': cells[2].text,
        })

    return None is not soup.select_one('#content a[rel="next"]')


has_next_page = send_spiders(url + str(page))
while has_next_page and page < 10:
    page = page + 1
    has_next_page = send_spiders(url + str(page))

f = open("src/index.js", "w+")
writeLine(f, 'module.exports = [')

for animal in animals:
    line = "{name: '%s', scientific: '%s', status: '%s'}," % (animal['name'], animal['scientific'], animal['status'])
    writeLine(f, line)
    print(line)

writeLine(f, '];')
f.close()

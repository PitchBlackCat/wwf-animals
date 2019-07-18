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
    soup = BeautifulSoup(content, features="html.parser")

    for row in soup.select('#content tr'):
        cells = row.select('td')

        if not cells:
            continue

        animals.append({
            'name': cells[0].text.strip(),
            'scientific': cells[1].text.strip(),
            'status': cells[2].text.strip(),
        })

    return None is not soup.select_one('#content a[rel="next"]')


has_next_page = send_spiders(url + str(page))
while has_next_page and page < 10:
    page = page + 1
    has_next_page = send_spiders(url + str(page))

f = open("index.js", "w+")
writeLine(f, 'let wwf_animals = [')

for animal in animals:
    line = '{name: "%s", scientific: "%s", status: "%s"},' % (animal['name'], animal['scientific'], animal['status'])
    line = line.encode('utf-8').strip()
    writeLine(f, line)
    print(line)

writeLine(f, '];')
writeLine(f, 'module.exports = wwf_animals;')
f.close()

import re
from collections import Counter

words = []
with open("words_alpha.txt", encoding="utf-8") as f:
    for l in f:
        if len(l) > 3:
            if "\n" in l:
                words.append(l[:-1])
            else:
                words.append(l)

def spelling_bee(letters, center):
    result = []
    letters = letters.lower()
    center = center.lower()
    regex = r"^([" + letters + "])*" + center + "+" + "([" + letters + "])*$"
    for w in words:
        if re.match(regex, w) != None and len(w) > 3:
            result.append(w)
    result_set = set(result)
    res2 = sorted(result_set)

    for w in res2:
        print(w.upper())
    print(f"Found {len(result)} words!")

    for w in res2:
        c = Counter(w)
        if len(c) >= 7:
            print(f"Possible Panagaram: {w.upper()}")


spelling_bee("leiacm", "f")

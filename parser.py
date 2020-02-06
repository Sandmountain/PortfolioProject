import re

s = "React Native, React Navigation, Redux, API, Firebase, Authentication, Material Design,  High score, Wikipedia, API, Material Design, UX."

li = []
li = s.split(",")
newli = []

for word in li:

    newWord = re.sub('([a-zA-Z])', lambda x: x.groups()
                     [0].upper(), word, 1).lstrip()
    newli.append(newWord)

print(newli)

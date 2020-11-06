import math
import glob
import os
import json

cwd = os.getcwd()

def filetostring(dir_fullpath, regexpat):
    f_given = glob.glob(os.path.join(dir_fullpath,regexpat))
    stri = "".join(open(f_given[0], 'rt').readlines())
    return stri

def dictionnary(resdir,userdir):
    Upath = os.path.join(cwd,resdir,userdir)
    #paramsstring = filetostring(Upath, "*params.txt")
    dicti = {}
    dicti['paramsout'] = filetostring(Upath, "*params.txt")
    dicti['newick'] = filetostring(Upath, "*.dnd")
    return dicti

def dictio2json(mydictio):
    myjson = json.dumps(mydictio,sort_keys=True)
    return myjson


"""
returns pow given two integers in a txt file:
8
2
"""
def getpower(filepth):
    txtcnt = open(filepth, 'rt')
    nb_l = [i.replace('\n','') for i in txtcnt.readlines()]
    return math.pow(int(nb_l[0]), int(nb_l[1]))


if __name__ == '__main__':
    dirresu = "RESULTS/"
    #user_project = "user001_runExmpl"
    print(getpower(dirresu+"hellokit.txt"))
    print(cwd)



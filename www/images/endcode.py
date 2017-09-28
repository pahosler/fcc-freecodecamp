#!/usr/bin/python
import base64
import sys
file = sys.argv[1:]
enc = base64.b64encode(open("getcoffee.wav","rb").read())
print enc

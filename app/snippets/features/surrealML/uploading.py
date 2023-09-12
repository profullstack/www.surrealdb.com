from surrealml import SurMlFile
import requests
import json


test_load = SurMlFile.load("./linear_test.surml")
url = "http://0.0.0.0:8000/ml/import"

payload = json.dumps({
    "file": test_load.to_bytes()
})
headers = {
  'Accept': 'application/json',
  'NS': 'test',
  'DB': 'test',
  'Content-Type': 'text/plain',
  'Authorization': 'Basic cm9vdDpyb290'
}

files = {'file': test_load.to_bytes()}
response = requests.request("POST", url, headers=headers, data=payload)

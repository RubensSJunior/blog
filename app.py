from chalice import Chalice

app = Chalice(app_name='api')

import boto3
import json

brt = boto3.client(service_name='bedrock-runtime')

def consomeMusica(musica,banda):


    prt = f"""Dado o nome de uma #MUSICA# e #BANDA# retorne 3 albuns que contenham essa musica seguido o seguinte padrão:
        Texto : #MUSICA# | #BANDA#
        saida :[Album 1,Album 2,Album 3]
        
        Texto: {musica} | {banda}
        Saida:
        """
    body = json.dumps({
        "inputText": prt ,
        "textGenerationConfig": {
        "temperature":0.1}
    })


    modelId = "amazon.titan-text-express-v1"
    accept = "application/json"
    contentType = "application/json"

    response = brt.invoke_model(
        body=body,
        modelId=modelId,
        accept=accept,
        contentType=contentType
    )

    retorno = json.loads(response.get('body').read())
    return retorno['results'][0]['outputText']




@app.route('/')
def index():
    return {'hello': 'world'}



@app.route('/teste')
def teste():
    
    consomeMusica("Faroeste Caboclo","Legião Urbana")
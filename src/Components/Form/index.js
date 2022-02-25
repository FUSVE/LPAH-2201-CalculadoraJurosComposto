import { useState } from "react";
import { View, Text, TextInput, Button, Keyboard } from "react-native";
import Result from "../Result";

export default function Form() {

    const [capital, setCapital] = useState(null)
    const [taxa, setTaxa] = useState(null)
    const [tempo, setTempo] = useState(null)
    const [montante, setMontante] = useState(null)

    function calcularJuros() {
        let valor
        for (let i = 1; i <= tempo; i++) {
            valor = capital * (1 + taxa / 100) ** tempo
        }
        return setMontante(valor.toFixed(2))
    }

    function validar(){
        if (capital != null && taxa != null && tempo != null){
            calcularJuros()
            setCapital(null)
            setTaxa(null)
            setTempo(null)
            Keyboard.dismiss()
        } else {
            setMontante(null)
        }
    }


    return (
        <View>
            <View>
                <Text>Informe o capital:</Text>
                <TextInput 
                keyboardType="numeric" 
                onChangeText={setCapital} 
                value={capital} />
                <Text>Informe a taxa de juros (a.m):</Text>
                <TextInput 
                keyboardType="numeric" 
                onChangeText={setTaxa} 
                value={taxa} />
                <Text>Informe o tempo (meses):</Text>
                <TextInput keyboardType="numeric" 
                onChangeText={setTempo} 
                value={tempo} />
                <Button title="Calcular" 
                onPress={() => validar()} />
            </View>
            <View>
                <Result Result={montante}/>
            </View>
        </View>
    );
}


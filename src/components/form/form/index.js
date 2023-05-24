import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Form() {
    const [nome, setNome] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [email, setEmail] = useState(null)

    const [textButton, setTextButton] = useState("Enviar informações")

    const [informacoes, setInformacoes] = useState("Aguardando Valores....")
    function validarDados() {
        if (nome, telefone, email != null) {
            setInformacoes("Nome: " + nome + "| Telefone: " + telefone + "| Email: " + email)
            setTextButton("Novas Informações")
            return
        }
        setInformacoes("PREENCHA O FORMULÁRIO CORRETAMENTE!")
    }

    return (
        <View>
            <Text>Nome</Text>
            <TextInput placeholder="Insira seu nome" style={styles.input} value={nome} onChangeText={setNome} />
            <Text>Telefone</Text>
            <TextInput placeholder="Insira seu nome" style={styles.input} value={telefone} onChangeText={setTelefone} />
            <Text>Email</Text>
            <TextInput placeholder="Insira seu nome" style={styles.input} value={email} onChangeText={setEmail} />

            <TouchableOpacity style={styles.button} onPress={() => { validarDados() }}>
                <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>

            <View style={styles.containerResul}>
                {informacoes}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        border: '1px solid black',
        padding: 5,
        borderRadius: 15,
        paddingLeft: 10,
        fontWeight: '600'
    },

    button: {
        backgroundColor: 'black',
        padding: 10,
        marginTop: 20,
        borderRadius: 15
    },

    textButton: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerResul: {
        border: '1px solid black',
        padding: 50,
        margin: 100,
        borderRadius: 5,
        cursor: 'pointer'
    }


})
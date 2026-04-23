import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import topo from "../../assets/topo.png";

const { width } = Dimensions.get('window');

export default function Ceep() {
  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cabeçalho com Imagem */}
        <View style={estilos.header}>
          <Image source={topo} style={estilos.topo} resizeMode="cover" />
          <View style={estilos.overlayTitulo}>
             <Text style={estilos.titulo}>Lanches do Dia</Text>
          </View>
        </View>

        {/* Listagem de Itens */}
        <View style={estilos.corpo}>
          <Text style={estilos.subtitulo}>Cardápio Semanal</Text>
          
          <View style={estilos.itemCard}>
            <Text style={estilos.diaSemana}>Segunda-feira</Text>
            <Text style={estilos.lancheNome}>Bolacha com chá</Text>
          </View>

          <View style={estilos.itemCard}>
            <Text style={estilos.diaSemana}>Terça-feira</Text>
            <Text style={estilos.lancheNome}>Chá com bolacha</Text>
          </View>

          <View style={estilos.itemCard}>
            <Text style={estilos.diaSemana}>Quarta-feira</Text>
            <Text style={estilos.lancheNome}>Bolacha com suco</Text>
          </View>

          <View style={estilos.itemCard}>
            <Text style={estilos.diaSemana}>Quinta-feira</Text>
            <Text style={estilos.lancheNome}>Suco com bolacha</Text>
          </View>

          <View style={estilos.itemCard}>
            <Text style={estilos.diaSemana}>Sexta-feira</Text>
            <Text style={estilos.lancheNome}>Bolacha com bolacha</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Fundo levemente cinza para destacar os cards brancos
  },
  header: {
    width: '100%',
    height: width * 0.6, // Proporção responsiva
    backgroundColor: '#003366',
  },
  topo: {
    width: '100%',
    height: '100%',
  },
  overlayTitulo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 140, 0, 0.9)', // Laranja com leve transparência
    paddingVertical: 12,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  corpo: {
    padding: 20,
  },
  subtitulo: {
    fontSize: 18,
    color: '#003366', // Azul escuro
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FF8C00',
    paddingBottom: 5,
    alignSelf: 'flex-start',
  },
  itemCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#003366', // Detalhe em azul
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  diaSemana: {
    fontSize: 14,
    color: '#FF8C00', // Laranja para o dia
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  lancheNome: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});
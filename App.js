import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Footer from './componentes/Footer';


export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
    <StatusBar hidden ={false}></StatusBar>

    <Header/>
    <Content/>
    <Footer/>
    
      
    </ScrollView>
    </SafeAreaView>
  );
}



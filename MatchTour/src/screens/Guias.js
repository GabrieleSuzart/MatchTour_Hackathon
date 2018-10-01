import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Avatar } from '../components/common/index';
import { Actions } from 'react-native-router-flux';


class Guias extends Component{
    voltar(){
        Actions.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <Header>
                    {/* Logo */}
                    <TouchableOpacity onPress={() => this.voltar()}>
                        <Image  source={require('../images/back.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Avatar image={require('../images/loira.jpg')}  />
                    </TouchableOpacity>
                </Header>
                              
                <View style={styles.contentContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.guiaContainer}>
                            <View style={styles.personalInformation}>
                                <Image  source={require('../images/guia1.png')}/>
                                <View style={styles.personalContent}>
                                    <Text style={styles.nome}>
                                        Mariana Cardozo
                                    </Text>
                                    <Image  source={require('../images/5stars.png')}/>
                                </View>
                            </View>
                            <View style={styles.personalQualifications}>
                                <Text style={styles.information}>
                                    Fluente em inglês e espanhol
                                </Text>
                                <Text style={styles.information}>
                                    Disponível das 10h às 17h
                                </Text>
                                <Text style={styles.price}>
                                R$ 250,00 
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonStyle}>
                                        CONTATAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.guiaContainer}>
                            <View style={styles.personalInformation}>
                                <Image  source={require('../images/guia2.png')}/>
                                <View style={styles.personalContent}>
                                    <Text style={styles.nome}>
                                        Letícia Oliveira
                                    </Text>
                                    <Image  source={require('../images/4stars.png')}/>
                                </View>
                            </View>
                            <View style={styles.personalQualifications}>
                                <Text style={styles.information}>
                                    Fluente em inglês e espanhol
                                </Text>
                                <Text style={styles.information}>
                                    Disponível das 10h às 17h
                                </Text>
                                <Text style={styles.price}>
                                R$ 350,00 
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonStyle}>
                                        CONTATAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.guiaContainer}>
                            <View style={styles.personalInformation}>
                                <Image  source={require('../images/guia3.png')}/>
                                <View style={styles.personalContent}>
                                    <Text style={styles.nome}>
                                        Alan Santana
                                    </Text>
                                    <Image  source={require('../images/4stars.png')}/>
                                </View>
                            </View>
                            <View style={styles.personalQualifications}>
                                <Text style={styles.information}>
                                    Fluente em inglês e espanhol
                                </Text>
                                <Text style={styles.information}>
                                    Disponível das 10h às 17h
                                </Text>
                                <Text style={styles.price}>
                                R$ 200,00 
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonStyle}>
                                        CONTATAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        marginTop: 20
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonStyle: {
        color: 'white',
    },
    button: {
        backgroundColor: '#95FF72',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 5
    },
    guiaContainer: {
        backgroundColor: '#FCFCFC',
        borderRadius: 5,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        marginBottom: 10
    },
    personalInformation: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    personalContent: {
        marginLeft: 20
    },
    nome: {
        fontSize: 16
    },
    personalQualifications: {
        marginTop: 40
    },
    information: {
        fontSize: 13,
        marginBottom:10
    },
    price: {
        textAlign: 'right',
        color: 'green'
    }
}

export default Guias;
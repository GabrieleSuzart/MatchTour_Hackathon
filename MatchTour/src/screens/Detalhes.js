import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Avatar } from '../components/common/index';
import { Actions } from 'react-native-router-flux';


class Detalhes extends Component{
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
                        <View style={styles.atracoesContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.atracaoImage} source={this.props.atracao.foto}/>
                                
                            </View>
                            <Text style={styles.atracaoTitle}>
                                {this.props.atracao.nome}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                            <Text style={styles.atracaoDescription}>
                                {this.props.atracao.descricao}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.guias()}>
                        <Text style={styles.buttonStyle}>
                            BUSCAR GUIAS
                        </Text>
                    </TouchableOpacity>
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
        flex: 1
    },
    atracoesContainer: {
        marginTop: 20,
    },
    atracaoImage: {
        width: '100%',
        height: 280,
        borderRadius: 10
    },
    atracaoTitle: {
        fontSize: 30,
        marginTop: 20,
        color: '#4A4A4A'
    },
    atracaoDescription: {
        fontSize: 14,
        marginTop: 5,
        color: '#4A4A4A'
    },
    infoContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5
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
    }
}

export default Detalhes;
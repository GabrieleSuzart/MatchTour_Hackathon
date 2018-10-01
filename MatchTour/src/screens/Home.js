import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Avatar } from '../components/common/index';
import { Actions } from 'react-native-router-flux';


class Home extends Component{
    state={
        totais: [
            {
                id: 1,
                nome: 'Morro de São Paulo',
                foto: require('../images/morro-1.jpg'),
                descricao: 'O Morro de São Paulo é um lugar muito bonito, praias lindas e um povo muito receptivo',
                favorito: 0
            },
            {
                id: 2,
                nome: 'Ilha dos Frades',
                foto: require('../images/frades-1.jpg'),
                descricao: 'A ilha dos frades é um lugar muito bonito, praias lindas e um povo muito receptivo',
                favorito: 0
            },
            {
                id:3,
                nome: 'Pelourinho',
                foto: require('../images/pelourinho-1.jpg'),
                descricao: 'O pelourinho é top pra caramba',
                favorito: 0
            },
            {
                id:4,
                nome: 'Salinas da Margarida',
                foto: require('../images/salinas-da-margarida.jpg'),
                descricao: 'A cidade de Salinas da Margarida, se encanta pela beleza de suas praias de águas calmas nas ilhas que o circundam, e reserva bons picos para a pesca e a prática de esportes náuticos',
                favorito: 0
            },
            {
                id:5,
                nome: 'Igrejada Ordem Terceira do Carmo',
                foto: require('../images/IgrejadaOrdemTerceiradoCarmo.jpg'),
                descricao: 'A Ordem Terceira do Carmo foi fundada em Cachoeira no ano de 1691, sendo praticamente contemporânea ao convento.',
                favorito: 0
            }
        ],
        atracoes: [
            {
                id: 1,
                nome: 'Morro de São Paulo',
                foto: require('../images/morro-1.jpg'),
                descricao: 'O Morro de São Paulo é um lugar muito bonito, praias lindas e um povo muito receptivo',
                favorito: 0
            },
            {
                id: 2,
                nome: 'Ilha dos Frades',
                foto: require('../images/frades-1.jpg'),
                descricao: 'A ilha dos frades é um lugar muito bonito, praias lindas e um povo muito receptivo',
                favorito: 0
            },
            {
                id:3,
                nome: 'Pelourinho',
                foto: require('../images/pelourinho-1.jpg'),
                descricao: 'O pelourinho é top pra caramba',
                favorito: 0
            },
            {
                id:4,
                nome: 'Salinas da Margarida',
                foto: require('../images/salinas-da-margarida.jpg'),
                descricao: 'A cidade de Salinas da Margarida, se encanta pela beleza de suas praias de águas calmas nas ilhas que o circundam, e reserva bons picos para a pesca e a prática de esportes náuticos',
                favorito: 0
            },
            {
                id:5,
                nome: 'Igreja da Ordem Terceira do Carmo',
                foto: require('../images/IgrejadaOrdemTerceiradoCarmo.jpg'),
                descricao: 'A Ordem Terceira do Carmo foi fundada em Cachoeira no ano de 1691, sendo praticamente contemporânea ao convento.',
                favorito: 0
            }
        ],
        atual: 0,
        favoritos: []
    }

    volta() {
        if(this.state.atual == 0){
            this.setState({
                atual: (this.state.atracoes.length - 1)
            })
        } else {
            this.setState({
                atual: (this.state.atual - 1)
            })
        }
    }

    vai(){
        if(this.state.atual == (this.state.atracoes.length - 1)){
            this.setState({
                atual: 0
            })
        } else {
            this.setState({
                atual: (this.state.atual + 1)
            })
        }
    }

    abrirOpcoes(){
        Actions.detalhes({atracao: this.state.atracoes[this.state.atual]});
    }

    favoritar(){
        this.state.totais.forEach((item, index)=> {
            if(item.id == this.state.atracoes[this.state.atual].id){
                var aux2 = this.state.totais.slice();
                if(aux2[index].favorito == 0){
                    aux2[index].favorito = 1
                } else {
                    aux2[index].favorito = 0
                    console.log(aux2);
                }
                this.setState({
                    totais: aux2.slice()
                })
            }
        })
        var aux = this.state.atracoes.slice();
        if(aux[this.state.atual].favorito == 0){
            aux[this.state.atual].favorito = 1
        } else {
            aux[this.state.atual].favorito = 0
        }
        this.setState({
            atracoes: aux
        })
    }

    favoritos(){
        var aux = this.state.totais.filter((item)=> {
            return item.favorito == 1;
        })
        this.setState({
            atracoes: aux.slice(),
            atual: 0
        })
    }

    todos(){
        var aux = this.state.totais.slice();
        this.setState({
            atracoes: aux,
            atual: 0
        })
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Header>
                    {/* Logo */}
                    <Avatar image={require('../images/logo.png')}  />
                    <TouchableOpacity>
                        <Avatar image={require('../images/loira.jpg')}  />
                    </TouchableOpacity>
                </Header>
                <View style={styles.categoryContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.categoryStyle} onPress={ () => this.todos() }>
                            <Text style={styles.categoryText}>
                                TODOS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryStyle} onPress={ () => this.favoritos() }>
                            <Text style={styles.categoryText}>
                                FAVORITOS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryStyle}>
                            <Text style={styles.categoryText}>
                                MUSEUS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryStyle}>
                            <Text style={styles.categoryText}>
                                RESTAURANTES
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryStyle}>
                            <Text style={styles.categoryText}>
                                FORTES
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>                
                <View style={styles.contentContainer}>
                    {/* Categorias vão aqui */}
                    
                    {/* Aqui vai as atrações */}
                    <View style={styles.atracoesContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.atracaoImage} source={this.state.atracoes[this.state.atual].foto}/>
                            <View style={styles.infoContainer}>
                                <TouchableOpacity onPress={() => this.abrirOpcoes()}>
                                    <Image source={require('../images/info.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.atracaoTitle}>
                            {this.state.atracoes[this.state.atual].nome}
                        </Text>
                        <Text style={styles.atracaoDescription}>
                            {this.state.atracoes[this.state.atual].descricao}
                        </Text>
                    </View>
                    
                </View>
                <View style={styles.controlesContainer}>
                    <TouchableOpacity style={styles.botaoStyle} onPress={() => this.volta()}>
                        <Image source={require('../images/volta.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoStyle}>
                        <Image source={require('../images/talk.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoStyle} onPress={() => this.favoritar()}>
                        <Image source={this.state.atracoes[this.state.atual].favorito == 1 ? require('../images/love2.png') : require('../images/love.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoStyle}>
                        <Image source={require('../images/share.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoStyle} onPress={() => this.vai()}>
                        <Image source={require('../images/vai.png')}/>
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
        flex:1
    },
    categoryContainer:{
        marginTop: 20,
        paddingLeft: 20
    },
    categoryStyle: {
        backgroundColor: '#673AB7',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    categoryText: {
        color: 'white'
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
    controlesContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        paddingBottom: 20,
        alignItems: 'center'
    },
    botaoStyle: {
        marginRight: 10,
        marginLeft: 10
    },
    imageContainer: {
        position: 'relative'
    },
    infoContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5
    }
}

export default Home;
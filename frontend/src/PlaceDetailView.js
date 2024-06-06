'use strict'

import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Button, 
    Modal, 
    Text, 
    Pressable, 
    Linking, 
    Image,
    ScrollView, 
} from 'react-native';

// 아이콘 출처 : https://www.flaticon.com/kr/icon-fonts-most-downloaded
const Icons = {
    "location": require('../res/icon/location.png'),
    "phone-full": require('../res/icon/phone-full.png'),
    "phone": require('../res/icon/phone.png'),
    "star-full": require('../res/icon/star-full.png'),
    "star": require('../res/icon/star.png'),
    "clock": require('../res/icon/clock.png'),
};

export default class PlaceDetailView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { modalVisible, closeModal, place } = this.props;
        return (
            <Modal visible={modalVisible}
                animationType='slide'
                presentationStyle='overFullScreen'
                transparent={true}
            >
                <Pressable
                    style={styles.paddingSpace}
                    onPress={closeModal}
                />
                <View style={styles.modal}>
                    <ScrollView>
                    <Text style={styles.titleText}>
                        {place.name}
                    </Text>
                    <PlaceText res={Icons['star-full']} value={`${place.rating} / 5.0`} />
                    <PlaceText res={Icons['location']} value={place.address} />
                    <PlaceText res={Icons['phone-full']} value={place.number} />
                    <PlaceText res={Icons['clock']} value={place.open_hours} />
                    <Button
                        title={"웹 사이트"}
                        onPress={() => { Linking.openURL(place.site) }}
                    />
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}

class PlaceText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { res, value } = this.props;
        return (
            <View style={styles.infoView}>
                <View style={styles.infoName}>
                    <Image source={res} style={styles.infoNameIcon} />
                </View>
                <Text style={styles.infoDetailText}>{value}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

    paddingSpace: {
        flex: 2,
        backgroundColor: 'transparent',
    },

    modal: {
        flex: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: '4%',
        marginRight: '4%',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
    },

    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 28,
    },
    infoView: {
        flexDirection: "row",
        marginBottom: 10,
        borderBottomColor: "#eee"
    },
    infoName: {
        flex:1,
    },
    infoNameIcon: {
        width: 24,
        height: 24
    },
    infoDetailText: {
        flex: 7,
        fontSize: 16,
    },
})
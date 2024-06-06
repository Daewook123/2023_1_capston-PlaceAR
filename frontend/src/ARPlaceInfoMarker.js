'use strict'

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    ViroText,
    ViroNode,
    ViroImage,
    ViroFlexView
} from '@viro-community/react-viro';

export default class ARPlaceInfoMarker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { position, clickEvent, name, rating, visible } = this.props;
        return (
            <ViroNode 
            position={position}
            onClick={clickEvent}
            transformBehaviors={['billboardY']}
            visible={visible}
            >
                <ViroNode >
                    <ViroFlexView style={styles.Container} position={[0, 2, 0]} width={5} height={1.5}>
                        <ViroFlexView style={styles.TitleBox} >
                            <ViroText style={styles.TitleText} text={name} width={1} />
                        </ViroFlexView>
                        <ViroFlexView style={styles.ContentBox}>
                            <ViroImage source={require('../res/icon/star-full.png')} style={styles.StarIcon} scale={[1, 1, 1]} />
                            <ViroText style={styles.ContentText} text={`${rating} / 5.0`} width={1.5} />
                            <ViroText style={styles.ContentText} text={"영업중"} width={1} />
                        </ViroFlexView>
                    </ViroFlexView>
                </ViroNode>
                <ViroImage
                    source={require('../res/marker.png')}
                    scale={[1, 1.5, 1]}
                />
            </ViroNode>
        )
    }
}

const styles = StyleSheet.create({
    TitleText: {
        fontFamily: "SamsungKorean, NotoSansCJK, Roboto",
        fontSize: 50,
        color: '#111111',
        textAlignVertical: "center",
        flexShrink: 1,
        fontWeight: "bold",
    },
    StarIcon: {
        width: 0.3,
        height: 0.3,
    },
    ContentText: {
        fontFamily: "Roboto, SamsungKorean, NotoSansCJK",
        fontSize: 30,
        color: '#111111',
    },
    Container: {
        backgroundColor: "#ffffffdd",
        flexDirection: "column",
        flexWrap: 'wrap',
        padding: .2,
    },
    TitleBox: {
        flex: 1,
        flexDirection: "row",
        flexShrink: 1,
    },
    ContentBox: {
        flex: 1,
        flexDirection: "row",
        textAlignVertical: 'center',
        alignContent: 'center',
    },
});
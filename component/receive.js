import React from "react";
import { View, Text } from "react-native";
import fire from "./fire";

export default class Receive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
        };
    }
    componentWillMount() {
        fire.firestore().collection("data").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let currArr = this.state.datalist;
                currArr.push(doc.data())
                this.setState({
                    datalist: currArr 
                })
                console.log(this.state.datalist);
            });
        });
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>{this.state.datalist.Name}</Text>
                <Text>{this.state.datalist.Number}</Text>
                <Text>{this.state.datalist.BloodGroup}</Text>
                <Text>{this.state.datalist.Location}</Text>
            </View>
        );
    }
}
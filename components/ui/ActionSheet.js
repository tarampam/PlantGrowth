import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import PropTypes from "prop-types";

import {Colors} from "../../constants/styles";


const ActionSheet = (props) => {
    const { actionItems } = props;
    const actionSheetItems = [
        ...actionItems,
        {
            id: '#cancel',
            label: 'Cancel',
            onPress: props?.onCancel
        }
    ]

    function callMe(value){
        if(value.id === '#cancel'){
            props.onCancel();
        } else {
            props.onPress(value)
        }
    }
    return (
        <View style={styles.modalContent}>
            {
                actionSheetItems.map((actionItem, index) => {
                    return (
                        <TouchableHighlight
                            style={[
                                styles.actionSheetView,
                                index === 0 && {
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                },
                                index === actionSheetItems.length - 2 && {
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                },
                                index === actionSheetItems.length - 1 && {
                                    borderBottomWidth: 0,
                                    backgroundColor: Colors.error500,
                                    marginTop: 8,
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                }]}
                            underlayColor={Colors.primary100}
                            key={index} onPress={()=>callMe(actionItem)}
                        >
                            <Text allowFontScaling={false}
                                  style={[
                                      styles.actionSheetText,
                                      props?.actionTextColor && {
                                          color: props?.actionTextColor
                                      },
                                      index === actionSheetItems.length - 1 && {
                                          color: Colors.error100,
                                      }
                                  ]}>
                                {actionItem.label}
                            </Text>
                        </TouchableHighlight>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 20,
    },
    actionSheetText: {
        fontSize: 18,
        color: Colors.primary500
    },
    actionSheetView: {
        backgroundColor: Colors.error500,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primary800
    },
})

ActionSheet.propTypes = {
    actionItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            label: PropTypes.string,
            images: PropTypes.array,
            onPress: PropTypes.func
        })
    ).isRequired,
    onCancel: PropTypes.func,
    actionTextColor: PropTypes.string,
    onPress: PropTypes.func
}


ActionSheet.defaultProps = {
    actionItems: [],
    onCancel: () => { },
    actionTextColor: null,
    onPress: () => { },
}

export default ActionSheet;
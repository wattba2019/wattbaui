import React, { Component } from 'react';
import {
    View, StyleSheet, Image,
} from 'react-native';
import { connect } from "react-redux";

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catogeries: "services"
        }
    }

    render() {
        const { gallery, galleryStylist } = this.props
        console.log(gallery, "gallery_get")
        return (
            <View style={styles.imageCard}>
                {
                    (gallery && gallery[0].galleryImages) ? (
                        gallery[0].galleryImages.map((key, index) => {
                            return (
                                <Image
                                    key={index}
                                    style={styles.imageSizing}
                                    resizeMode="stretch"
                                    source={{ uri: key }}
                                />
                            )
                        })
                    ) : null
                }

                {
                    (galleryStylist) ? (
                        galleryStylist.map((key, index) => {
                            return (
                                <Image
                                    key={index}
                                    style={styles.imageSizing}
                                    resizeMode="stretch"
                                    source={{ uri: key }}
                                />
                            )
                        })
                    ) : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCard: {
        marginTop: 15, flex: 1,
        flexDirection: "row", flexWrap: "wrap",
        justifyContent: "center", alignItems: "center",
    },
    imageSizing: {
        width: "40%", height: 180,
        margin: 10, borderRadius: 10
    }
});
let mapStateToProps = state => {
    return {
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);


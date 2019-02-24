import React from 'react';
import {setSocialNetwork} from '../../store/actions/index';
import socialNetwork from '../../socialNetworks/index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    color: state.color
})

const mapDispatchToProps = (dispatch) => ({
    setSocialNetwork: (socialNetwork) => dispatch(setSocialNetwork(socialNetwork)),
    setDefault: (defaultStyle) => dispatch(setSocialNetwork(defaultStyle))
})


class Item extends React.Component{

    render(){
        return(
            <div onMouseLeave={() => this.props.setDefault(socialNetwork.defaultStyle)} 
                onMouseEnter={() => this.props.setSocialNetwork(this.props.socialNetwork)} 
                id={this.props.socialNetwork.id} className='item' 
                style={{borderColor: this.props.color}}
            >
                <a href={this.props.socialNetwork.url} target="_blank">{this.props.children}</a>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
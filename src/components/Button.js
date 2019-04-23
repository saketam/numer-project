import React, { Component } from 'react';

const style = {//css-inline ไม่แนะนำให้ใช้
    backgroundColor: '#faa',
    padding: '15px',
};

class Button extends Component {
    render() {
        const { children ,text} = this.props;
        return (
            <button style={style}>
                {children}{text}
            </button>
        );
    }
}

export default Button;
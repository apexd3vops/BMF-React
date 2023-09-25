import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonLink extends Component {
  render() {
    const { path, text, isMain } = this.props;
    return (
      <Link
        to={path}
        className={`inline-block  rounded-full font-bold font-Krona text-xs ${isMain ? 'bg-orange-400 py-3 px-10' : 'bg-dark text-white py-2 px-5'
          }`}
      >
        {text}
      </Link>
    );
  }
}

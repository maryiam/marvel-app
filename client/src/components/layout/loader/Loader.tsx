import React from 'react';
import './Loader.css';
import loader from 'assets/loading.svg';
import { LoaderProps } from './index';

const Loader = ({ processing = false, children }: LoaderProps) => (
  <div className="wrapper">
    {processing ? <img className="loader" src={loader} /> : children}
  </div>
);

export default Loader;

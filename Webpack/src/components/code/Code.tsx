import React from 'react';
import * as styles from './code.module.scss';

const Code: React.FC = () => (
  <>
    <div className="container-fluid h-screen bg-rose-100 ">
      <div className="row row-cols-2">
        <div>
          <button
            type="button"
            className="btn btn-outline-primary my-2">
            Hello World
          </button>
        </div>
        <div>Hello</div>
        <div>Hello</div>
        <div className="text-rose-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in
          repudiandae itaque adipisci, eligendi libero magni sunt accusantium
          inventore corrupti autem? Sit deserunt officia dolor quae ipsa dicta?
          Nam, voluptas!
        </div>
      </div>
    </div>
  </>
);

export default Code;

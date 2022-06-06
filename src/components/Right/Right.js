import React from 'react';
import './Right.scss'
const Right = () => {
    return (
        <div className='right-container'>
            <button className='right-btn'>Get unlimited access</button>
            <div className='right-search-box'>
                <div className='right-searcher'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="rgba(8, 8, 8, 1)"><path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path></svg>
                </div>
                <input className='right-search' type="search" placeholder='Search' />
            </div>
            <div className='right-title'>
                <span className='right-dot'></span>
                What We’re Reading Today
            </div>
            <ul className='right-list'>
                <li className='right-item'>
                    <div className='right-inner'>
                        <img src="https://miro.medium.com/fit/c/25/25/1*39BbNZoVKsqz-j_3tUtGEA.jpeg" alt="Brad-Stulberg"  className='right-img'/>
                        <p className='right-parag'>Brad Stulberg</p>
                    </div>
                    <p className='right-desc'>Motivation is Overrated: Here’s What Works Instead</p>
                </li>
                <li className='right-item'>
                    <div className='right-inner'>
                        <img src="https://miro.medium.com/fit/c/25/25/1*3qVOQ3pfGKB9nRMv0nSnKQ.png" alt="Mari-Concepcion" className='right-img' />
                        <p className='right-parag'>Mari Concepcion</p>
                    </div>
                    <p className='right-desc'>When Coming Out Means Losing Everything</p>
                </li>
                <li className='right-item'>
                    <div className='right-inner'>
                        <img src="https://miro.medium.com/fit/c/25/25/1*zFgL3Di-_EQNVm2GWkTyUA.jpeg" alt="Carvell Wallace" className='right-img' />
                        <p className='right-parag'>Carvell Wallace</p>
                    </div>
                    <p className='right-desc'>On Endings #1</p>
                </li>
            </ul>
            <p className='right-see-list'>See the full list</p>
            <div className='right-imgs'>
                <svg viewBox="0 0 1043.63 592.71" class="bo hu"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                <svg width="19" height="19" class="la"><path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fill-rule="evenodd"></path></svg>
                <svg width="29" height="29" class="rb" ><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" fill='rgb(56, 161, 243)'></path></svg>
            </div>
            <p className='right-twitter'>Discover Medium writers you already follow on Twitter.</p>
            <button className='right-bnt-later'><svg width="25" height="25" viewBox="0 0 25 25" class="rl gn y"><path d="M22.3 4.3c-.82.51-1.72.88-2.67 1.08a4.25 4.25 0 0 0-6.18-.12 4.3 4.3 0 0 0-1.26 3.03c0 .34.04.67.08 1a12.2 12.2 0 0 1-8.81-4.52 4.8 4.8 0 0 0-.62 2.14 4.44 4.44 0 0 0 1.92 3.6 4.13 4.13 0 0 1-1.91-.55v.07c0 2.06 1.47 3.8 3.44 4.21-.37.08-.74.13-1.15.15l-.76-.07a4.32 4.32 0 0 0 3.98 2.99A9.03 9.03 0 0 1 3 19.14l-1-.06A12.26 12.26 0 0 0 8.6 21c7.88 0 12.2-6.55 12.17-12.18.02-.23.02-.41 0-.62a8.06 8.06 0 0 0 2.15-2.23c-.77.37-1.6.6-2.45.7a4.1 4.1 0 0 0 1.84-2.38" fill='rgb(56, 161, 243)'></path></svg>Connect to Twitter</button>
        </div>
    );  
}

export default Right;

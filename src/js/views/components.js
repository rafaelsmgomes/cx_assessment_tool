import Checkbox from '../models/Checkbox';
import Dial from '../models/Dial';
import Likert from '../models/Likert';
import Slider from '../models/Slider';
import Vertfc from '../models/Vertfc';

import {state} from '.././state';

export const createDial2 = (attr) => {    

    const textArr = attr.textArr;

    let text0 ='';
    let text1 ='';
    let text2 ='';

    var dial = new Dial(attr);

    state.dials.push(dial);

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    dial.id = attrID;

    const id = state.dials.length-1; 

    if(textArr.length === 3){
        text0 = textArr[0];
        text1 = textArr[1];
        text2 = textArr[2];        
    }else{
        text0 = textArr[0];        
        text2 = textArr[1];  
    }

    return `
        <div class="dial-group dial-group--${id}" data-id="${id}">
            <div class="dial-tracker__wrapper">
                <input type="text" value="2" class="dial-tracker2 dial-tracker2--${id}" data-id="${id}" data-context=false>
            </div>
            <div class="dial-clock__wrapper">
                <div class="dial__crown"></div>
                <div class="dial__hand"></div>

                <div class="dial__context">
                    <div class="dial__context-section dial__context-section--1">
                        <div class="dial__line dial__line--1"></div>
                        <div class="dial__text dial__text--1c">${text1}</div>                                
                    </div>
                    <div class="dial__context-section dial__context-section--2">
                        <div class="dial__context--wrapper dial__context--wrapper--1">
                            <div class="dial__line dial__line--0"></div>
                            <div class="dial__text dial__text--0c">${text0}</div>                                     
                        </div>
                        <div class="dial__context--wrapper dial__context--wrapper--2 dial__context--wrapper">
                            <div class="dial__text dial__text--2c">${text2}</div>                   
                            <div class="dial__line dial__line--2"></div>
                        </div>
                    </div>
                    <div class="dial__context-section dial__context-section--3">
                        <div class="dial__text dial__text--4">
                            TEST
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    `;  
} 

export const createDial1 = (attr) => {    

    const textArr = attr.textArr;

    let text0 ='';
    let text1 ='';
    let text2 ='';

    var dial = new Dial(attr);

    state.dials.push(dial);

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    dial.id = attrID;

    const id = state.dials.length-1; 

    if(textArr.length === 3){
        text0 = textArr[0];
        text1 = textArr[1];
        text2 = textArr[2];        
    }else{
        text0 = textArr[0];        
        text2 = textArr[1];  
    }

    return `
        <div class="dial-group dial-group--${id}" data-id="${id}">
            <div class="dial-tracker__wrapper">
                <input type="text" value="2" class="dial-tracker dial-tracker--${id}" data-id="${id}" data-context=false>
            </div>
            <div class="dial-clock__wrapper">
                <div class="dial__crown"></div>
                <div class="dial__hand"></div>

                <div class="dial__context">
                    <div class="dial__context-section dial__context-section--1">
                        <div class="dial__line dial__line--1"></div>
                        <div class="dial__text dial__text--1c">${text1}</div>                                
                    </div>
                    <div class="dial__context-section dial__context-section--2">
                        <div class="dial__context--wrapper dial__context--wrapper--1">
                            <div class="dial__line dial__line--0"></div>
                            <div class="dial__text dial__text--0c">${text0}</div>                                     
                        </div>
                        <div class="dial__context--wrapper dial__context--wrapper--2 dial__context--wrapper">
                            <div class="dial__text dial__text--2c">${text2}</div>                   
                            <div class="dial__line dial__line--2"></div>
                        </div>
                    </div>
                    <div class="dial__context-section dial__context-section--3">
                        <div class="dial__text dial__text--4">
                            TEST
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    `;  
}


export const createLikert = (attr) => {
    const textArr = attr.textArr;     
    const addTo = 100/(textArr.length-1);
    const custVals = attr.custVals ? attr.custVals : false; 
    let startPoint = 0;
    let htmltext = '';
    var likert = new Likert(attr); 

    state.likerts.push(likert);

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    likert.id = attrID;

    const id = state.likerts.length-1;

    for (let j = 0; j < textArr.length; j++) {

        htmltext +=  `
            <div class="likert__group">
                <input type="radio" class="likert__input" id="likert__id--${id}-${j}" value=${custVals ? custVals[j] : startPoint} name="likert__name--${id}" text="${textArr[j]}">
                <label for="likert__id--${id}-${j}" class="likert__label">
                    <div class="likert__button likert__button--0">
                        <div class="likert__checkmark"></div>
                    </div>
                    <span class="likert__text">${textArr[j]}</span>
                </label>
            </div>
        `;     
        startPoint = startPoint + addTo;            
    } 

    return `
        <div class="likert__container likert__container--${id}">
            <svg class="likert__line--group"> 
                <line class="likert__line" x1='0' x2='800' y1='50' y2='50'></line>                             
            </svg>
            <form action="" class="likert__form likert__form--${id}" data-id='${id}'>
                ${htmltext}
            </form>
        </div>
    `;  
}

export const createCheckbox = (attr) => {
    const textArr = attr.textArr;
    var checkbox = new Checkbox(attr); 
    state.checkboxes.push(checkbox);
    const id = state.checkboxes.length-1;

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    checkbox.id = attrID;

    let htmltext = '';

    for(let j = 0; j < textArr.length; j++){        

        htmltext += `   
            <div class="checkbox__group">
                <input type="checkbox" class="checkbox__input" name="checkbox--${id}" id="checkbox--${id}--${j}" value="${textArr[j]}">
                <label for="checkbox--${id}--${j}" class="checkbox__label">
                <div class="checkbox__button checkbox__button--0">
                <div class="checkbox__checkmark"></div>
                </div>
                <span class='checkbox__text'>${textArr[j]}</span>
                </label>
            </div>
        `;
    }

    return `
        <div class="checkbox__container checkbox__container--${id}">
            <form action="#" class='checkbox__form checkbox__form--${id}' data-id='${id}'>
                ${htmltext}
            </form>
        </div>
    `
}

export const createVertfc = (attr) => {
    const textArr = attr.textArr;
    const custVals = attr.custVals ? attr.custVals : false; 
    const addTo = 100/(textArr.length-1);
    let startPoint = 100;
    let htmltext = '';
    const vertfc = new Vertfc(attr);
    state.vertfcs.push(vertfc);



    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    vertfc.id = attrID;

    const id = state.vertfcs.length-1;

    for (let j = 0; j < textArr.length; j++) {
        htmltext += 
        `
        <div class="vertfc__group vertfc__group--${j}">
            <input type="radio" class="vertfc__input" id="vertfc__id--${id}-${j}" value=${custVals ? custVals[j] : startPoint} name="vertfc__name--${id}" text="${textArr[j]}">
            <label for="vertfc__id--${id}-${j}" class="vertfc__label">
                <div class="vertfc__button vertfc__button--0">
                    <div class="vertfc__checkmark"></div>
                </div>
                <span class="vertfc__text">${textArr[j]}</span>
            </label>
        </div>
        `;
        startPoint = startPoint - addTo; 
    };

    return `
        <div class="vertfc__container vertfc__container--${id}">
            <form action="#" class="vertfc__form vertfc__form--${id}" data-id="${id}">
                ${htmltext}
            </form>
        </div>  
    `;    
}

export const createSlider = (attr) => {

    const sliderArr = attr.sliderArr; 

    const sliderNum = sliderArr.length;

    let htmltext = '';
    let counter = 1;
    var slider = new Slider(attr);
    state.sliders.push(slider);

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    slider.id = attrID;

    const id = state.sliders.length - 1;
    const sliderGroup = state.sliders[id];

    for(let j = 0; j < sliderNum; j++){
        htmltext += 
        `
        <div class="slider__content${addActiveClass(j)}">
            <div class="slider__header">                                        
                <div class="slider__title">${sliderGroup.questionSet[j]}</div>
                <div class="slider__step">${counter}/${sliderNum}</div>
                <div class="slider__down"></div>
            </div>
            <div class="slider__mid">
                <div class="slider__description slider__description--1">${sliderGroup.minSet[j]}</div>
                <div class="slider__description slider__description--2">${sliderGroup.maxSet[j]}</div>
            </div>
            <input type="range" min="0" max="100" value="5" role="input-range" id="slideInput--${id}--${j}" data-group="${id}" data-self="${j}">
        </div>
        `;
        counter++;
    }
    return `
        <div class="slider__container slider__container--${id}">
            <form action="#" class="slider__form slider__form--${id}" data-id="${id}">
                ${htmltext}
            </form>
        </div>
    `;    

    function addActiveClass(i){
        if(i === 0){
            return " slider__content--active";
        }else{
            return "";
        }
    } 
}

export const createSlider1 = (attr) => {

    const sliderArr = attr.sliderArr; 

    const sliderNum = sliderArr.length;

    let htmltext = '';
    let counter = 1;
    var slider = new Slider(attr);
    state.sliders.push(slider);

    const attrID =
    `${state.dials.length+ 
        state.likerts.length+
        state.checkboxes.length+
        state.vertfcs.length+
        state.sliders.length-
        1
    }`;

    slider.id = attrID;

    const id = state.sliders.length - 1;
    const sliderGroup = state.sliders[id];

    for(let j = 0; j < sliderNum; j++){
        htmltext += 
        `
        <div class="slider__content${addActiveClass(j)}">
            <div class="slider__header">                                        
                <div class="slider__title">${sliderGroup.questionSet[j]}</div>
                <div class="slider__step">${counter}/${sliderNum}</div>
                <div class="slider__down"></div>
            </div>
            <div class="slider__mid">
                <div class="slider__description slider__description--1">${sliderGroup.minSet[j]}</div>
                <div class="slider__description slider__description--2">${sliderGroup.maxSet[j]}</div>
            </div>
            <input type="range" min="1" max="100" value="5" role="input-range" id="slideInput--${id}--${j}" data-group="${id}" data-self="${j}">
        </div>
        `;
        counter++;
    }
    return `
        <div class="slider__container slider__container--${id}">
            <form action="#" class="slider__form--x slider__form--${id}" data-id="${id}">
                ${htmltext}
            </form>
        </div>
    `;    

    function addActiveClass(i){
        if(i === 0){
            return ' slider__content--active';
        }else{
            return'';
        }
    } 
}

// export const createSlider = (sliderArr) => {
    
//     const sliderNum = sliderArr.length;

//     let htmltext = '';
//     let counter = 1;
//     var slider = new Slider(sliderArr);
//     state.sliders.push(slider);
//     const id = state.sliders.length - 1;
//     const sliderGroup = state.sliders[id];

//     for(let j = 0; j < sliderNum; j++){
//         htmltext += 
//         `
//         <div class="slider__content${addActiveClass(j)}">
//             <div class="slider__header">                                        
//                 <div class="slider__title">${sliderGroup.questionSet[j]}</div>
//                 <div class="slider__step">${counter}/${sliderNum}</div>
//                 <div class="slider__down"></div>
//             </div>
//             <div class="slider__mid">
//                 <div class="slider__description slider__description--1">${sliderGroup.minSet[j]}</div>
//                 <div class="slider__description slider__description--2">${sliderGroup.maxSet[j]}</div>
//             </div>
//             <input type="range" min="25" max="100" value="27" role="input-range" id='slideInput--${id}--${j}' data-group='${id}' data-self='${j}'>
//         </div>
//         `;
//         counter++;
//     }
//     return `
//         <div class="slider__container slider__container--${id}">
//             <form action="#" class='slider__form slider__form--${id}' data-id='${id}'>
//                 ${htmltext}
//             </form>
//         </div>
//     `;    

//     function addActiveClass(i){
//         if(i === 0){
//             return ' slider__content--active';
//         }else{
//             return'';
//         }
//     } 
// }
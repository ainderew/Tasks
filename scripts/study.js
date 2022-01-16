const colors = ["#c7ceea","#b5ead7","#ffb7b2","#ffdac1"];

const wrapper_subject = document.querySelector(".wrapper_subjects");

// temporary, back-end route not yet created for subjects
const createSubjectContainer = () =>{

    for(let i=0;i<15;i++){
        let element = document.createElement("div");
        element.classList.add("box_subject");
        element.innerHTML = `<span class="span_subject_title">Math</span>
        <span class="span_subject_code">EM123</span>`
        if(i>3){
            let checker = i-4;
            while(checker>3){
                checker -=4;
            }
            element.style.background = colors[checker];
        }else{
            element.style.background = colors[i];
        }
        wrapper_subject.appendChild(element);
    }
}

createSubjectContainer();
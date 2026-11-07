const welcomeButton = document.querySelector('#welcome-button');
const statusMessage = document.querySelector('#status');
const content= document.getElementById('latin-vocab-display');


function show_stage(){
  content.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent="Choose a stage";
  content.append(heading);

  for(let stage=1; stage<=18; stage++){
    const button=document.createElement("button");

    button.type="button";
    button.textContent=`Stage ${stage}`;

    button.addEventListener("click",()=>{
      //show the stage vocab
    });

    content.append(button);
  }
}


async function loadStage(){
  const responce= await fetch(``);
  
  if(!responce.ok){
    throw new Error(`could not load stage`);
  }

  const data = await response.json();
  return data;
}


async function show_Vocabulary(stage){
  content.replaceChildren();
  
  const heading = document.createElement("h1");
  heading.textContent= `Stage - ${}`;

  const backButton=document.createElement("button");
  backButton.type="button";
  backButton.textContent="All Stages";
  backButton.addEventListener("click", show_stage);

  const results=document.createElement("div");

  const message=document.createElement("p");
  message.setAttribute("role", "status");
  message.textContent="laoding...";
  results.append(message);

  content.append(heading, backButton, results);

  try{
    const data=await loadStage(stage);
    const words=data.words;

    heading.textContent=data.title;

    if(words.length === 0){
      message.textContent="No vocab is detected you bum";
      return
    }

    const list=document.createElement("ul");

    for(word in words){
      const item=document.createElement("li");
      item.textContent=`${word.latin} - ${word.definition}`;
      list.append(item);
    }
    message.textContent= `${words.length} words`;
    results.append(list);
  }catch(error){
    message.textContent="Unable to load vocabulary chekc the JSON file please";
    console.error(error);
  }
}

if (content) {
  show_stage();
}



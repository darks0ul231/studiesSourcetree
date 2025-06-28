import api from './../common/Api'

import { useEffect, useState} from 'react';

import Design from "./Design";

const Home = () => {



  const [files, setFiles] = useState([]);



  //ang useeffect na to kapag  empty array ang parameter [] <<< ganyan, onc lang sya mag-eexecute kahit maraming render yung  component (nagrerender kapag nagbgo variable and other stuffs)
  useEffect(() => {
    //mag-eexecute to once, isng beses lang check mo image na sinend ko if nakakalito
    
    //wala lang to, anonymous function na may async para makapag -await tayo lagay mo na lang pag need
    (async ()=>{

      try{

        //heto yung yung may await
        //heto magsesend sya ng GET  requests sa 'https:/onlysub.com/api/files'
        const res=await api.get('files'); ///yang files idudugtong nya sa nasa Api.js

        //so yung files nasa data kasi yun kaya inaccess natin
        const files = res?.data?.data||[];



        setFiles(files); //niset lang natin yung variable gamit setFiles para irender ulit yung component
        console.log(files)

      }catch(e){
        
      }

    })();
  }, []); ////empty array parameter ng use effect



    //ditno nirerender yung component
    ///ang gagawin lang nito is magloolooop sa files tapos gagawin natin silang jsx <div>filname</div>
    //heres the tutorial sa map https://www.w3schools.com/jsref/jsref_map.asp
    //mas madali matutunan ang map using tutorial, loop lang yun. icoconvert nya yung array into something else na array pa rin.
    //dito ginawan natin ng maraming div bawat file
    // naging <div>file1</div><div>file2</div><div>file3</div> and so on hanggat may file
    //gets kahit rough idea?wala nmn, so nagets mo?or mejo? kayang basahin, pero kung pure coding, mejo yeah htats expected
    //kasi wala ka pang react. pag natutunan mo na react madali na lang to kaya mahaba paliwanag ko at mahirap kasi need mo react js
    //anyways i can send you a tutorial https://www.w3schools.com/react/default.asp
    //hayan lahat ng sinabi ko halos anjan mas pinadali ko lang yung paliwanag
    // i guess were good, aralin mo react tapos try mo ulit gawin yung login at homepage gpero this time react na lahat neh
    // may questions ka?wala nmn
    // ok awesome. nasimulan mo na ba react kahit konti? lahat yun sa w3schools, kasama yung 6hr+ vid nya at 4hrs kay bro vode
    //react ba lahat yun? hmmm sonabasa mo na tong react na to?oo
    //ok dapat gets mo na to alin yung di mo magets try ko explian, yung sa build lng tlga ng code, baka gawin ko nlng is maghahanap na dapat gamitin, copy paste
    //ok  sa build ng code try natin teka
    /// ang npm run build  will build the code maggegenerate yan n g html css javascript  andun sa build folder yung nagenerate
    ///sabi builder itry dw natin iinstall uung server if gusto natin makita yung laman ng nabuild natin
    //pwede natin yan kasi ideploy sa server like aws, sa google, sa github pages atbp. pero pwede din natin ideploy sa computer natin
    /// npm install -g serve <<install daw natin yan
    //tapos para ideploy eto naman  serve -s build <<< yung build eh yung build folder yan
    // so hayan gumagan sya,  try mo nga iopen yung browser ng phone mo  tapos itype mo to
    // http://192.168.254.195:3000 possible na maaccess mo to since same router kayo pero syempre depende pa rin yan sa setup ng router nyo
    // ideally sana nakakunek sa wifi yung  pc mo eh peor try mo na lang din gumana?oo nice
    // now may papakita ako sa ibang way naman teka mabagal internet
    // by the way, ung devops bahala magdeploy sa gawa mo hindi ikaw. so need mo lang ipush sa git gamit yung sourcetree
    // sila na bahala after non
    //install ko ngrok. npm install ngrok -g
    //ang ngrok para makita sa internet yung website mo temporarily (good for testing purposes)
    //ngrok http 3000 para iiexpose yung server mo sa interent aw need na pala ng account
    //oh well wag na pala if magreregister pa ako

    //so in short di mo need ideploy, devops or senior dev bahala magdeploy.
    //bawal ikaw humawak ng server kasi baka magdown server mas malaking headache yun hehe
    //so di mo problema yun as a junior . kahi mid level pa bawal.
    //senior level lang ang pwede magdeploy
    //any qeustions?none nice


    //goods na tayo? oo
    //isave mo lahat ng conversation natin baka magamit mo
    //osya aral ka na end ko na to sge

    return <>
    <Design>
    <div className="item-container centercontent fillparent">
      {files.map((file)=><div>{file.name}</div>)}
    </div>
    </Design>
    </>;
  };
  
  export default Home;
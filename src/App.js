import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import News from './News'
import './style.css'


function App() {
  var [search,setSearch] = useState('');
  var [posts,setPosts] = useState(
     [
    {
      "by" : "jganetsk",
      "id" : 8958,
      "kids" : [ 9132, 8969 ],
      "parent" : 8863,
      "text" : "How are you going to scale up your storage to meet the demands of the users? Are you doing something clever, like Google Filesystem? This is not an easy problem, if you aren't prepared for it in advance. If 10,000 users sign up tomorrow... you might be very very hosed, as opposed to very very happy.",
      "time" : 1175727738,
      "type" : "comment"
    },
    {
      "by" : "BrandonM",
      "id" : 9224,
      "kids" : [ 9272 ],
      "parent" : 8863,
      "text" : "I have a few qualms with this app:<p>1. For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.  From Windows or Mac, this FTP account could be accessed through built-in software.<p>2. It doesn't actually replace a USB drive.  Most people I know e-mail files to themselves or host them somewhere online to be able to perform presentations, but they still carry a USB drive in case there are connectivity problems.  This does not solve the connectivity issue.<p>3. It does not seem very \"viral\" or income-generating.  I know this is premature at this point, but without charging users for the service, is it reasonable to expect to make money off of this?",
      "time" : 1175786214,
      "type" : "comment"
    },
    {
      "by" : "andreyf",
      "id" : 121168,
      "kids" : [ 121216, 121242 ],
      "parent" : 121003,
      "text" : "Why not just scale the weight given to a vote based on the voter's karma? Or would this encourage group think?",
      "time" : 1203670226,
      "type" : "comment"
    },
    {
      "by" : "tel",
      "descendants" : 16,
      "id" : 121003,
      "kids" : [ 121016, 121109, 121168 ],
      "score" : 25,
      "text" : "or HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
      "time" : 1203647620,
      "title" : "Ask HN: The Arc Effect",
      "type" : "story"
    }
   
  
]
  
  )

const list =[]
let ans;

  useEffect(() => {
    async function abc() {
      var {data} = await axios.get('https://604c115aee7cb900176a2d28.mockapi.io/api');
     

    
  
    }
    abc();
 
  }, [posts]);

 
const renderList = posts.filter((post) => post.text.toLowerCase().includes(search.toLowerCase()));

    




  return (
    <div className="Hacker News ">
      
      <nav className="navbar navbar-expand-lg navbar-light orange mb-5">
      <a className="navbar-brand mr-5" href="#">News Hacker Display</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>

  </button>
 
  <input type="text" className="form-control col-md-8 " id="exampleInputEmail1" value={search} onChange={(e) => setSearch(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Search Query" />
      </nav>
      
    
     {
       renderList.length==0 ? <div className= "align-text-center row justify-content-center">No search results</div>: renderList.map((post) => (
        <News search={search} name = {post.text} id={post.id} comment={post.by} type={post.type} ></News>
      ))
     }


  


    
    </div>
  );
}

export default App;

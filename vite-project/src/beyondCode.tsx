import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Beyond: React.FC = () => {
    return (
        <>
        <NavBar/>
        <div style={{marginLeft:"20px", marginRight:"20px"}}>
            <h1 style={{ textAlign: 'center', marginTop:"7px" }}>Beyond Code</h1>
            <h2>Vision:</h2>
            <p>The goal of my product is to make maths classes more interactive for primary school students. Often students find maths class boring and find it difficult to learn from textbooks. Some students are visual or kinaesthetic learners and learning from teachers talking is very difficult. D’ISE will allow students to study probabilities and see the distribution of the rolls on the website. The product adds an element of fun to maths classes which makes learning maths less of a chore. The dice has a number of different face options from six-sided dice to twenty-sided dice. This gives students the opportunity to advance to more difficult probabilities. From junior infants to second class, the dice would help cover a number of topics from learning numbers to performing mathematical operations. The overall vision of the product is to enhance the maths learning experience by making lessons more engaging but while still developing key maths skills.</p>
            <h2>Stakeholders:</h2>
            <p>The stakeholders for my product are primary school students and teachers. According to the Central Statistics Office, there were 561,411 students enrolled in primary schools in 2021 <a href="https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/">[1]</a>. It is mandatory that all of these student’s study math. However, 69% of primary school students rank maths as the least interesting subject <a href="https://cslstudy.ie/">[2]</a>. Students will have an interest in the product as it will help them improve their maths grades and help them grasp core concepts. Teachers will be interested in D’ISE as it will help them have more interactive maths lessons but without all of the preparation. D’ISE will provide all the implementation of the lesson between the physical dice and the website. While not direct users, parents of primary school students may also be stakeholders. Parents often care about their children’s grades and they want to see them succeed and grasp difficult maths concepts. If D’ISE will improve the learning experience for their children, they will be interested in the product.</p>
            <h2>Block Diagram:</h2>
            <p>The elements discussed in the excel sheet are:</p>
            <ul>
                <li>User rolls - physical dice</li>
                <li>Website- sending the data to the website</li>
            </ul>
            <img src="./BlockDiagramTemplate.jpg" alt="Block Diagram" style={{ textAlign: 'center', marginBottom: "20px", height: "50%", width:"50%"}}/>    
            <h2>References:</h2>
            <p>[1] - www.cso.ie. (n.d.). Education - CSO - Central Statistics Office. [online] Available at: <a href="https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/">https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/.</a><br/>
                [2] - CSL. (n.d.). Home. [online] Available at: <a href="https://cslstudy.ie/">https://cslstudy.ie/</a> [Accessed 12 Feb. 2024]. <br/>
            </p>
        </div>
        <Footer/>
        </>
    );
}

export default Beyond;
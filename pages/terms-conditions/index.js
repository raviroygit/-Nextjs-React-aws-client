import Link from 'next/link'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Layout from '../../components/Layout';
import Footer from '../footer/footer';

const TermOfService =()=>{
    return (
        <React.Fragment>
            <div style={{backgroundColor:'black'}}>
            <Layout>
                <div className="row row-cols-auto display-flex">
            <Card className="col" style={{backgroundColor:'transparent'}}>
                <Card.Header style={{color:'white'}}>
                <h1 className='text-center pt-5'>Terms and conditions</h1>
                </Card.Header>
            <Card.Body className="col pull-center justify-content-center " style={{width:'100%',backgroundColor:'transparent',color:'green'}}>
            
               These terms and conditions ("Agreement") set forth the general terms and conditions of your use of the codelength.
            net website ("Website" or "Service") and any of its related products and services (collectively, "Services"). 
            This Agreement is legally binding between you ("User", "you" or "your") and this Website operator ("Operator", "we", "us" or "our").
             By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.
              If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement,
               in which case the terms "User", "you" or "your" shall refer to such entity. If you do not have such authority,
                or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services.
                 You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you,
                  and it governs your use of the Website and Services.

                  <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Accounts and membership</h3>  

                  If you create an account on the Website, 
                  you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may,
                   but have no obligation to, monitor and review new accounts before you may sign in and start using the Services.
                    Providing false contact information of any kind may result in the termination of your account. 
                    You must immediately notify us of any unauthorized uses of your account or any other breaches of security.
                     We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                      We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill.
                       If we delete your account for the foregoing reasons, you may not re-register for our Services.
                        We may block your email address and Internet protocol address to prevent further registration.

                <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>User content</h3>  

                        We do not own any data, information or material (collectively, "Content") that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy,
                         quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.
                          We may monitor and review the Content on the Website submitted or created using our Services by you.
                           You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you.
                            Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion,
                             refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. 
                        You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.

                <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Backups</h3>  

                We perform regular backups of the Website and its Content, however, these backups are for our own administrative purposes only and are in no way guaranteed.
                 You are responsible for maintaining your own backups of your data.
                  We do not provide any sort of compensation for lost or incomplete data in the event that backups do not function properly. 
                We will do our best to ensure complete and accurate backups, but assume no responsibility for this duty.

            <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Links to other resources</h3>  

            Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval,
             association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein.
              Some of the links on the Website may be "affiliate links". 
              This means if you click on the link and purchase an item, the Operator will receive an affiliate commission.
               We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources.
                We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. 
                You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website and Services. 
            Your linking to any other off-site resources is at your own risk.

            <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Limitation of liability</h3>  

            To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents,
             suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused,
              under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages.
               To the maximum extent permitted by applicable law, the aggregate liability of the Operator and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or
                any amounts actually paid in cash by you to the Operator for the prior one month period prior to the first event or occurrence giving rise to such liability.
             The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.

             <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Changes and amendments</h3> 
             We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time,
              effective upon posting of an updated version of this Agreement on the Website. When we do, we will post a notification on the main page of the Website.
              Continued use of the Website and Services after any such changes shall constitute your consent to such changes.

              <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Acceptance of these terms</h3> 
              You acknowledge that you have read this Agreement and agree to all its terms and conditions.
               By accessing and using the Website and Services you agree to be bound by this Agreement. 
              If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.

              <h3 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>Contacting us</h3> 

              If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, 
              you may send an email to info@codelength.net.




            </Card.Body>
          
        </Card>
        </div>
        </Layout>
        
        <Footer/>
            </div>
        </React.Fragment>
    );
};

export default TermOfService;
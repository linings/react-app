import styles from './index.module.css'

const Adoption = () => {
    return (
        <div className={styles['adoption-process']}>
            <h1>Adoption Process</h1>
            <p>We’re so happy you’re interested in learning more about adopting with us!
            Our process has been updated to adjust to the challenges of the current
            state of our world in order to provide a safe environment for staff, animals,
            and potential adopters. We are currently processing applications remotely
            ahead of your first visit. We no longer take walk-in visits and cannot
            accommodate walk-in appointments at this time.</p>
            <h3>Below is an outline of our adoption process:</h3>
            <p> 
            1. Take a look at our adoptable animals! We ask that adopters have a specific animal in mind.
            <br/>
            <br/>
            2. Contact us to get in touch with a staff member for more information on that animal.
            <br/>
            <br/>
            3. Please allow up to one week for a reply. We are a very small team working to get back to everyone!
             We thank you so much for your patience and understanding while you wait.
            <br/>
            <br/>
            If you are interested in applying for the animal after hearing more about them, we’ll have you fill out a formal application. Please note, the adoption survey above is not our application!
            * If applying for a dog, we do ask for proof that you can have a dog where you live. Such as a pet policy on your lease, a letter from your building management, or proof of ownership if you own.

            Processing applications can take a few days. Once your application passes the first step of processing on paper, we’ll set an appointment date/time for you to visit the shelter to meet the animal! Ideally every member of the household will need to meet the animal at some point during the process.
            You should be prepared to take home the animal the same day as your visit, but it may take more than one meet and greet to approve your application.
We take multiple applications on all of our animals in an effort to find the best fit possible in a timely manner. If the animal you are interested in is adopted before you can complete the process.</p>
        </div>
    )
}

export default Adoption;
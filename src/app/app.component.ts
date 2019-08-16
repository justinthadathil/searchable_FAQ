import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  topic: string;
  free: string;
  premium: string;
  o1: string;
  o2: string;
  o3: string;
  o4: string;
  o5: string;
  o6: string;
  o7: string;
  o8: string;
  o9: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    topic: "What should I do in case I lose my phone ?",
    free: "Free version: In case, you lose your phone, check your email for alerts. If unusual activity has been detected on your phone, you will receive an email alert. Also, Return option appears for the Finder on the locked screen and a message warning him that the phone is being tracked. If the Finder clicks on Return option, you will receive an email alert informing you about the finder Name and Mobile. You can then coordinate with Finder to reunite with the phone.",
    premium: "Premium version: In case, you lose your phone, log-on to the web-panel and make sure the lost mode is active. You can track your phone's geo-location real-time and remotely ring the phone (even if phone is on silent. Note: permission needs to be provided during installation). If any unusual activity has been detected on your phone, an image of the intruder and his geoloction will be sent as an email alert or can be seen on the website dashboard. If you are unable to locate the phone, you can connect with tag8 customer support. tag8 customer support will assist you with additional evidence to track the phone. tag8 support will also assist in cordinating with the Finder, picking up the Lost Phone, delivering it to Owner and rewarding the finder with a Reward.",
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
  },
  {
    topic: "Will I receive the email alert if my phone is lost ?",
    free: "Free version: If unusual activity has been detected on your phone, lost mode is triggered and you will receive an email alert.",
    premium: "Premium version: Lost mode is triggered and email is triggered as soon as unusual acitvity is detected on the phone. Premium version has AI (Artificial Intillengence) enabled for unusual activity detection.",
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Why & How to trigger lost mode ?",
    free: "Free version: If unusual activity has been detected on your phone, lost mode is triggered automatically and phone is screen locked, you will receive an email alert.",
    premium: "Premium version: Premium version has AI (Artificial Intillengence) enabled unusual activity detection. Lost mode is triggered as soon as unusual acitvity is detected on the phone. Lost mode can also be triggered by logging-in to the webpanel. Alexa users can simply say Talk to Digital Tag and trigger Lost Mode or say Talk to smart Tag to Google Assistant"
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Does the phone ring if it is in silent mode ?",
    free: "Free version: This feature is not available in Free Version.",
    premium: "Premium version: Remotely ring the phone even when phone is on silent. To enable this feature, requisite permissions need to be provided during digital tag - find my phone app installation."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Does it alert on unauthorized activity ?",
    free: "Free version: Yes, there is an intruder alert detection. Email Alert is sent to the owner and an audio alert along with on-screen message is played on the phone warning the intruder about the phone activities being tracked.",
    premium: "Premium version: Premium version has AI (Artificial Intillengence) enabled for unusual intruder activity detection.Email Alert is sent to the owner and an audio warning along with on-screen message is played on the phone informing the intruder about the phone activities being tracked."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "How do I track Unauthorized / Intruder activity ?",
    free: "Free version: The intruder activity can be tracked by viewing the Activity Dashboard either in app. It has historical logs of unauthorised activities along with images, time stamps and geo-location.",
    premium: "Premium version: The intruder activity can be tracked by viewing the Activity Dashboard in the app or on the webpanel. It has historical logs of unauthorised activities along with images, time stamps and geo-location. Premium Users can also log-in to the web panel and view the dashboard."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "What if I am unable to report loss of my phone immediately ?",
    free: "Free version: It is recommended that you trigger the lost mode immediately for a higher probability of return. In cases where lost mode is triggered by unusual activity, you will receive an email alert, same needs to be acted upon quickly. Also, in cases where Finder clicks the Return option, you will receive an email alert with the Finder's detail to coordinate and reunite with your lost phone.",
    premium: "Premium version: It is recommended that you trigger the lost mode immediately for a higher probability of return. In case of delay, immediately speak to our 24x7 customer support to initiate tracking and gathering evidence of your lost device."
  },
  {
    topic: "What type of assistance do I get, when my phone is lost ?",
    free: "Free version: When lost mode on a phone is triggered, you receive an email alert with the geolocation.",
    premium: "Premium version: To track you lost phone, following assistance is provided by tag8 i.e. ",
    o1: "1. 24 x 7 customer support",
    o2: "2. Tracking & Evidence gathering assistance on best effort basis",
    o3: "3. Co-ordination with Finder",
    o4: "4. Pick up from Finder",
    o5: "5. Doorstep delivery of phone to Owner",
    o6: "6. Reward for Finder",
    o7: "7. Assistance in Filing a police complaint, if the Finder is not responding or not traceable",
    o8: "8. Customised message on screen-lock",
    o9: "",
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "What if I have misplaced my phone and it is on silent mode ?",
    free: "Free version: Please upgrade to premium version for this service ",
    premium: "Premium version: Log-in to the web panel and click on Ring Phone. Even if the phone is on silent mode, the phone will ring (Note - permission needs to be provided during installation) Also, try to locate by triggering a lost mode and using the geo-location feature. For Alexa users simply say Talk to Digital Tag and trigger a ring."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "What should I do if I did not have screen lock enabled and have lost my phone ?",
    free: "Free version: It is highly recommended to screen-lock your phone to avoid mis-use and increase probability of return. In such situations, you can follow the same instructions as when you lose your phone. Note - In this case, the Return Option will not appear on phone screen for the Finders and audio warning informing the Finder about the phone activities being tracked will not be played.",
    premium: "Premium version: It is highly recommended to screen-lock your phone to avoid mis-use and increase probability of return. In such situations, you can follow the same instructions as when you lose your phone. Note - In this case, the Return Option will not appear on phone screen for the Finders and audio warning informing the Finder about the phone activities being tracked will not be played."
  },
  {
    topic: "What is the reward ?",
    free: "Free version: Owner can offer a reward directly to the finder. For tag8 sponsored Reward, upgrade to premium version",
    premium: "Premium version: tag8 offers following rewards to the Finder as an appreciation for the good deed:",
    o1: "1. tag8 products worth INR 2000.",
    o2: "2. Gift hamper from tag8 partners.",
    o3: "3. Recognition Certificate",
    o4: "4. Optional monitary reward from the Owner",
    o5: "", o6: "", o7: "", o8: "", o9: "",
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "If I put an additional reward on my phone being found, how will the Finder know about it and be motivated to return ?",
    free: "Free version: Rewards have to be communicated by the Owner to the Finder while coordinating the return.",
    premium: "Premium version: If the owner wishes to provide for an additional reward, he/she can communicate the same to tag8. tag8 will ensure that the additional reward is communicated and delivered to the finder."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Does tag8 offers door step delivery of Lost phone ?",
    free: "Free version: Please upgrade to Premium version, this service is not vailable in Free version.",
    premium: "Premium version: Return screen on the Finder device will show the standard Rewards for Return. Owner can customise a message on the Return screen with the additional reward. Also, while cordinating the return the same can be mentioned to the Finder."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Who bears the costs for arranging the pick up & return of the phone ?",
    free: "Free version: Please upgrade to Premium version, this service is not available in Free version.",
    premium: "Premium version: tag8 has strategic tie-ups with logistics partners across the globe at preferred rates. tag8 customer support will estimate the cost of logistics and communicate the same on actual basis to the Owner. On approval, the same is delivered to the Owner."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "In case I use free version of the app and have lost my phone, can I at that point pay and switch to Premium version and get constant tracking started on my phone ?",
    free: "Yes, Please call customer support on +91 9029008248. There is an option to upgrade under certain situations and by paying priority charges.",
    premium: "Important Note: It is mandatory that the free version of Digital tag - Find My Phone should have been installed on the phone."
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "Do I get help in filing police complaint ?",
    free: "Free version: Please upgrade to Premium version, this service is not vailable in Free version.",
    premium: "Premium version: Yes, Premium users get a customised Police compaint report with evidence that can be submitted to the police station for filing a missing phone complaint. Since there is evidence in the report, there is a higher possibility of action from the law enforcement agencies."
  },
  {
    topic: "Is my privacy Secured? Does tag8 track my phone 24x7 ?",
    free: "Yes, your privacy is our utmost priority and we have set the processes in place to protect the same. We DO NOT track your phone, untill the lost mode is triggered.",
    premium: "",
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
  },
  {
    o1: "", o2: "", o3: "", o4: "", o5: "", o6: "", o7: "", o8: "", o9: "",
    topic: "I have multiple mobiles - Can I secure them ?",
    free: "Free version: Yes, it is possible to secure more than one device under the same google account. Digital tag - Find My Phone App have to be installed using same google account on other devices as well.",
    premium: "Premium version: Yes, it is possible to secure more than one device under the same google account. Digital tag - Find My Phone App have to be installed using same google account on other devices as well."
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['topic'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  wordnew: string;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  keywords(value: string) {
    this.dataSource.filter = value;
    console.log(this.dataSource.filter)
  }


}

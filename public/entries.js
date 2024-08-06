const entries = [
    {
        id: 2,
        title: "Cameras, cameras, cameras…",
        date: "August 5th, 2024",
        imageSrc: "newsletter/2.jpeg",
        content: [
            "There’s so many cameras; which one should I buy?",
            "Photo of the Navy Pier in Chicago shot with <i>Canon Powershot SD800 IS.</i>",
            "There’s something magical about reminiscing through photos and videos, and cameras are such fascinating tools for capturing these memories. There's a clear distinction between using my camera versus my phone. When I take photos with my camera, I feel more present, like I’m living in the moment. Over the past week, I have been researching cameras to help me capture my favorite memories, and here are my notes.",
            "<u>Film vs Digital Cameras</u><br>The first thing I learned was about the two main types of cameras: film and digital. Each type has its own advantages and disadvantages, so I wanted to list the ones that stood out to me.<br><br><i>Film Camera:</i><li>To put it simply, a film camera (or analog camera) uses a film roll to capture the photos. This means you need to keep in mind which film you purchase in addition to the actual camera because each film type has its own benefits and drawbacks. </li><li>Interchangeable film rolls allow lots of variety with the style of the photo. Using film also means there’s a limited number of shots before you need to replace the film. </li><li>With film cameras, you need to take your film to a photo lab in order to develop the photo. Due to using film, there is a higher range between the whites and blacks in an image and often higher resolution.</li><br><i>Digital Camera:</i><li>Digital cameras store photos in digital memory, meaning you store the photos in memory cards. This allows instant gratification, and images can be viewed right after shooting. </li><li>Instead of changing film, many digital cameras have built-in filters and allow you to edit the photo directly on the camera.</li><br>I chose to purchase the <i>Panasonic LUMIX G100D</i> digital camera due to already having experience using a digital camera, the low price, and ease of use despite having many advanced features. The <i>Panasonic LUMIX G100D</i> also supports RAW image files, which is an advantage when it comes to <a target='_blank' href='#first'>color grading</a>.",
            "<u>RAW vs JPEG Files</u><br>Many digital cameras shoot and save their images as either JPEG or RAW files (a setting that can be changed in the camera settings), and each file type has its own pros and cons.<br><br><i>JPEG:</i><li>A JPEG file is far smaller in size than a RAW file and is supported by many more devices and software. </li><li>JPEGs also don’t require as much work when editing. This is due to the camera doing most of the work for you when capturing a JPEG. However, since the camera does a lot of the work for you, the JPEG image is stylized based on the camera producer.</li><i>RAW:</i><li>RAW images are uncompressed, meaning there won’t be any drop in resolution. JPEGs go through a compression process, which makes the file smaller but also loses details. </li><li>RAW images are also more malleable, meaning easier to edit to the style you want. When I want to control the vibes of the image/video, I would use a RAW file format.</li>",
            "<u>Types of Film Cameras</u><br>Despite only ever using digital cameras, the mechanical nature of film cameras tempts me into making an investment in the film world. The two main types of film cameras that captured my interest were the point-and-shoot and SLR cameras.<br><br><i>Point and Shoot:</i><li>As the name suggests, a point-and-shoot camera is very simple; all you have to do is point and shoot. </li><li>They are small and lightweight, and if I were to purchase my first film camera, it would be a point-and-shoot.</li><i>SLR:</i><li>An SLR camera or Single-Lens Reflex camera has much more control than a point-and-shoot. </li><li>You are able to change the lens, adjust for light, and shoot manually. However, this makes for a heavier, more technical camera.</li>",
            "As someone who lives and breathes engineering, researching the technical beauty of cameras was a joyful process. The mechanics and chemistry that elegantly unite to capture the light onto a layer of film makes me engrossed in learning more. As I mentioned previously, I just purchased a Panasonic LUMIX G100D, so look out for a newsletter reviewing it in the future.",
            "Thanks for listening, I hope that this was somewhat informative. If you have any tips, ideas, comments, or concerns, feel free to reach out! I’d love to chat.",
            "-PJ",
            ""
        ]
    },
    {
        id: 1,
        title: "Getting my feet wet in the art of cinematography.",
        date: "July 26th, 2024",
        imageSrc: "newsletter/1.jpeg",
        content: [
            "I spent a couple days learning about film; here are my notes.",
            "I made a short film to help learn. <a target='_blank' href='https://www.youtube.com/watch?v=go6uu9Ayvf0'>Feel free to check it out!</a>",
            "No matter how many filters I added to my videos, I could never get the vibe I wanted. The overexposed, warm, fuzzy vibe I got from old recordings or the emotional, vibrant, midnight vibes from A24 movies like <i>Waves</i> or <i>Moonlight</i>. Over the last few days, I spent some time learning how to edit my videos in post to add that extra level of <i>aesthetic</i> that filmmakers capture so well.",
            "<u>Color Theory & Film</u><br><ul><li>complementary colors are typically used together to add contrast to the subject and the background</li><li>complementary colors can be found on opposite sides of the color wheel</li><li>creating a color palette in film includes 3 parts:<ul><li><i>set design & costumes</i></li><li><i>lighting</i></li><li><i>color grading</i></li></ul></li></ul>",
            "<u>Color Correction in Adobe Premiere Pro</u><br><ul><li>color correction focuses on making images look realistic</li><li>color terminology:<ul><li><i>hue:</i> colors</li><li><i>saturation:</i> intensity of hue</li><li><i>luma:</i> brightness/shade of hue</li></ul></li><li>color correction workflow<ul><li>1. correct exposure</li><li>2. fix white balance</li><li>3. adjust saturation</li></ul></li></ul>",
            "<u>Color Grading in Adobe Premiere Pro</u><br><ul><li>color grading is used to add style and <i>vibes</i></li><li>i used 2 tools to color grade my recordings<ul><li><i>hsl secondary:</i> allows you to select a color and “correct it” to a color of your choice</li><li><i>mask:</i> allows you to select a section of the image to add certain effects to it</li></ul></li><li>here are my thoughts on color grading my short film<ul><li>i wanted the beginning of the video to be bright & happy, so i enhanced the greens, blues, and oranges</li><li>as the video progressed, i started including more blues and decreased exposure to foreshadow rain and the end of the ride</li><li>at the end, i brought back the vibrant colors to symbolize warmth and home</li></ul></li></ul>",
            "I learned everything from online videos and resources, and the process was extremely fun and rewarding. I still have sooooo much to learn, but it feels good to take a stab at something new. I’m currently researching cameras, so potentially, the next newsletter will be about that… maybe?",
            "Thanks for listening, I hope that this was somewhat informative. If you have any tips, ideas, comments, or concerns, feel free to reach out! I’d love to chat.",
            "- PJ",
            ""
        ]
    }
];


function insertEntries() {
    const desktopEntriesContainer = document.getElementById('entries');
    const mobileEntriesContainer = document.getElementById('entries-mobile');
    const template = document.getElementById('entry-template');

    if (!desktopEntriesContainer || !mobileEntriesContainer || !template) {
        console.error("One or more elements not found");
        return;
    }

    const templateContent = template.content;

    entries.forEach(entry => {
        console.log(`Processing entry: ${entry.title}`);

        // Desktop
        const desktopClone = document.importNode(templateContent, true);
        const desktopSection = desktopClone.querySelector('section');
        if (!desktopSection) {
            console.error("Section element not found in template");
            return;
        }

        desktopSection.id = `desktop-${entry.id}`; // Ensure unique id for desktop
        desktopSection.querySelector('h1').innerHTML = entry.title;
        desktopSection.querySelector('h2').innerHTML = `- ${entry.date} - <br>`;
        desktopSection.querySelector('img').src = entry.imageSrc;
        const paragraphs = desktopSection.querySelectorAll('p');
        for (let i = 0; i < entry.content.length; i++) {
            if (paragraphs[i]) {
                paragraphs[i].innerHTML = entry.content[i];
                paragraphs[i].style.marginBottom = '24px'; // Add bottom margin to paragraphs
            } else {
                console.error(`Paragraph element ${i} not found`);
            }
        }

        desktopEntriesContainer.appendChild(desktopClone);

        // Mobile
        const mobileClone = document.importNode(templateContent, true);
        const mobileSection = mobileClone.querySelector('section');
        if (!mobileSection) {
            console.error("Section element not found in template");
            return;
        }

        mobileSection.id = `mobile-${entry.id}`; // Ensure unique id for mobile
        mobileSection.querySelector('h1').innerHTML = entry.title;
        mobileSection.querySelector('h2').innerHTML = `- ${entry.date} - <br>`;
        mobileSection.querySelector('img').src = entry.imageSrc;
        const mobileParagraphs = mobileSection.querySelectorAll('p');
        for (let i = 0; i < entry.content.length; i++) {
            if (mobileParagraphs[i]) {
                mobileParagraphs[i].innerHTML = entry.content[i];
                mobileParagraphs[i].style.fontSize = '48px';  // Increase font size for mobile view
                mobileParagraphs[i].style.marginBottom = '48px'; // Add bottom margin
            } else {
                console.error(`Paragraph element ${i} not found`);
            }
        }

        // Distinguish between h1 and h2
        const mobileHeadings = mobileSection.querySelectorAll('h1');
        mobileHeadings.forEach(heading => {
            heading.style.fontSize = '60px'; // Increase font size for h1
            heading.style.marginBottom = '6px'; // Add bottom margin
        });

        const mobileSubHeadings = mobileSection.querySelectorAll('h2');
        mobileSubHeadings.forEach(subHeading => {
            subHeading.style.fontSize = '42px'; // Increase font size for h2
            subHeading.style.marginBottom = '24px'; // Add bottom margin
        });

        const mobileListItems = mobileSection.querySelectorAll('li');
        mobileListItems.forEach(listItem => {
            listItem.style.fontSize = '48px'; // Increase font size for mobile list items
            listItem.style.marginLeft = '48px'; // Add left margin for list items
            listItem.style.marginBottom = '12px'; // Add bottom margin for list items
        });

        mobileEntriesContainer.appendChild(mobileClone);
    });
}

// Call the function to insert entries
insertEntries();

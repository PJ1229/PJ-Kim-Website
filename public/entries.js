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
            "<u>Film vs Digital Cameras</u><br>The first thing I learned was about the two main types of cameras: film and digital. Each type has its own advantages and disadvantages, so I wanted to list the ones that stood out to me.<br><br><i>Film Camera:</i><li>To put it simply, a film camera (or analog camera) uses a film roll to capture the photos. This means you need to keep in mind which film you purchase in addition to the actual camera because each film type has its own benefits and drawbacks. </li><li>Interchangeable film rolls allow lots of variety with the style of the photo. Using film also means there’s a limited number of shots before you need to replace the film. </li><li>With film cameras, you need to take your film to a photo lab in order to develop the photo. Due to using film, there is a higher range between the whites and blacks in an image and often higher resolution.</li><br><i>Digital Camera:</i><li>Digital cameras store photos in digital memory, meaning you store the photos in memory cards. This allows instant gratification, and images can be viewed right after shooting. </li><li>Instead of changing film, many digital cameras have built-in filters and allow you to edit the photo directly on the camera.</li><br>I chose to purchase the <i>Panasonic LUMIX G100D</i> digital camera due to already having experience using a digital camera, the low price, and ease of use despite having many advanced features. The <i>Panasonic LUMIX G100D</i> also supports RAW image files, which is an advantage when it comes to color grading.",
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
            "<u>Color Theory & Film</u><br><li>complementary colors are typically used together to add contrast to the subject and the background</li><li>complementary colors can be found on opposite sides of the color wheel</li>creating a color palette in film includes 3 parts:<li><i>set design & costumes</i></li><li><i>lighting</i></li><li><i>color grading</i></li>",
            "<u>Color Correction in Adobe Premiere Pro</u><br><li>color correction focuses on making images look realistic</li>color terminology:<li><i>hue:</i> colors</li><li><i>saturation:</i> intensity of hue</li><li><i>luma:</i> brightness/shade of hue</li>color correction workflow<li>1. correct exposure</li><li>2. fix white balance</li><li>3. adjust saturation</li>",
            "<u>Color Grading in Adobe Premiere Pro</u><br><li>color grading is used to add style and <i>vibes</i></li>i used 2 tools to color grade my recordings<li><i>hsl secondary:</i> allows you to select a color and “correct it” to a color of your choice</li><li><i>mask:</i> allows you to select a section of the image to add certain effects to it</li>here are my thoughts on color grading my short film<li>i wanted the beginning of the video to be bright & happy, so i enhanced the greens, blues, and oranges</li><li>as the video progressed, i started including more blues and decreased exposure to foreshadow rain and the end of the ride</li><li>at the end, i brought back the vibrant colors to symbolize warmth and home</li>",
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

    if (!desktopEntriesContainer || !mobileEntriesContainer) {
        console.error("One or more elements not found");
        return;
    }

    entries.forEach(entry => {
        console.log(`Processing entry: ${entry.title}`);

        // Desktop
        const desktopSection = document.createElement('section');
        desktopSection.id = `desktop-${entry.id}`;

        const desktopTitle = document.createElement('h1');
        desktopTitle.innerHTML = entry.title;
        desktopSection.appendChild(desktopTitle);

        // Add the first line of content below the title
        if (entry.content.length > 0) {
            const firstLine = document.createElement('p');
            firstLine.innerHTML = entry.content[0];
            firstLine.style.marginBottom = '24px'; // Space below the first line
            desktopSection.appendChild(firstLine);
        }

        const desktopDate = document.createElement('h2');
        desktopDate.innerHTML = `- ${entry.date} - <br>`;
        desktopSection.appendChild(desktopDate);

        const desktopImage = document.createElement('img');
        desktopImage.src = entry.imageSrc;
        desktopSection.appendChild(desktopImage);

        // Add the remaining content after the image
        entry.content.slice(1).forEach(content => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = content;
            paragraph.style.marginBottom = '24px'; // Space below each paragraph
            desktopSection.appendChild(paragraph);
        });

        desktopEntriesContainer.appendChild(desktopSection);

        // Mobile
        const mobileSection = document.createElement('section');
        mobileSection.id = `mobile-${entry.id}`;

        const mobileTitle = document.createElement('h1');
        mobileTitle.innerHTML = entry.title;
        mobileTitle.style.fontSize = '60px';
        mobileTitle.style.marginBottom = '6px';
        mobileSection.appendChild(mobileTitle);

        // Add the first line of content below the title
        if (entry.content.length > 0) {
            const mobileFirstLine = document.createElement('p');
            mobileFirstLine.innerHTML = entry.content[0];
            mobileFirstLine.style.fontSize = '48px'; // Mobile font size
            mobileFirstLine.style.marginBottom = '48px'; // Space below the first line
            mobileSection.appendChild(mobileFirstLine);
        }

        const mobileDate = document.createElement('h2');
        mobileDate.innerHTML = `- ${entry.date} - <br>`;
        mobileDate.style.fontSize = '42px';
        mobileDate.style.marginBottom = '24px';
        mobileSection.appendChild(mobileDate);

        const mobileImage = document.createElement('img');
        mobileImage.src = entry.imageSrc;
        mobileSection.appendChild(mobileImage);

        // Add the remaining content after the image
        entry.content.slice(1).forEach(content => {
            const mobileParagraph = document.createElement('p');
            mobileParagraph.innerHTML = content;
            mobileParagraph.style.fontSize = '48px'; // Mobile font size
            mobileParagraph.style.marginBottom = '48px'; // Space below each paragraph
            mobileSection.appendChild(mobileParagraph);
        });

        // Additional mobile styles for list items
        const mobileListItems = mobileSection.querySelectorAll('li');
        mobileListItems.forEach(listItem => {
            listItem.style.fontSize = '48px';
            listItem.style.marginLeft = '48px';
            listItem.style.marginBottom = '12px';
        });

        mobileEntriesContainer.appendChild(mobileSection);
    });
}

// Call the function to insert entries
insertEntries();

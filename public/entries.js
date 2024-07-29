const entries = [
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

        desktopSection.id = entry.id;
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

        mobileSection.id = entry.id;
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

        // Add top margin to mobile section
        mobileSection.style.marginTop = '300px';

        mobileEntriesContainer.appendChild(mobileClone);
    });
}

// Call the function to insert entries
insertEntries();

// ==========================================
// EDIT YOUR FILE CONTENT HERE
// ==========================================
// Add or modify files by adding entries below
// Format: 'file#': 'Your content here'
// ==========================================

// Authentication Passwords
const VIEWER_PASSWORD = '9fQ!Zx@7L^2mR#A%KcW*H8J$eP&yS4D~'; // Password to VIEW the website
const OWNER_PASSWORD = 'T9!qZ^L4@E8v#H2$R%NwC7xK&*S'; // Password to EDIT files

// Check authentication status
let isViewerAuthenticated = false;
let isOwnerAuthenticated = false;

// Command input tracking
let commandInput = '';

const filesContent = {
    'file1': `Welcome to File 1

This is the first secret file in the collection.
You can easily customize the content for each file by editing this section.

Key Information:
- File Type: Document
- Status: Active
- Created: 0000-01-20 

Edit Log:
- 0000-01-21: First entry. -

Nothing much of the first day, I have honestly nothing to put here.`,

    'file2': `File 2 - Project Overview

Details about your second file go here.
You can add multiple paragraphs and structure your content however you like.

Features:
• Easy to update
• Full customization
• Clean formatting

Feel free to add as much content as needed.`,

    'file3': `File 3 - Important Notes

Add your important information here.
Each file can have its own unique content.

Remember to save your changes after editing!`,

    'file4': `File 4 - Math - Algebraiska uttryck

-tal och variabler
-tecken: Gånger, Division, subtraktion och addition  ( * / - + )
2a+3b+2
Förenkla uttryck
2a+3a+2+7 = 5a + 9 (5a + 9) = förenklat uttryck.


Distributivalagen : a (b+c) =  a * b + a * c

EX: 2 *(3+5) = 2*3 + 2*5 = 6+10 = 16

Kommuntativa lagarna: a + b = b + a , a * b = b * a 

EX: 2 + 7 = 7 + 2 , 2 * 7 = 7 * 2


Associativa lagarna: (a + b) + c = a + (b + c)
(a * b)* c = a(b * c)


Regler:
Plustecken( + ) framför parentes()
Ta bort parentes utan ändra tecken

a + (b + c) = a + b + c 

Minustecken( - ) framför parentes()
ändra tecken på allt ;Parentesen"()"

a - (a + c) = a - b - c

EX:1 Förenkla uttrycket
(x + 2y + 3) + (2x + y -1) = x + 2y + 3 + 2x + y - 1 = 3x + 3y + 2

EX:2
 3(x + 2 + 3y) = 3x + 6 + 9y
 
OBS om ( - ) är före parentes() och inom parentes ÄNDRAR på minustecken( - ) inom parentes() till plustecken ( + )

Ekvation

Y=2x+1

y x = variabler

EX: 2x-4=8

Ett vänsterled och högerled (beroende på vilken sida av = tecknet det är på)

Ta reda på x värde

Värde på X = värde på högerled.
Lös ekvationen 2x - 4 = 8

Håll koll på ordnings reglerna (),* , / , + , -
2x - 4 = 8
+4   +4
2x = 12
÷2   ÷2
x = 6

Vad man gör i vänsterledet måste man göra i högerledet också.

Lösning till ekvationer kallas för rotter (plural av rot)

EX2: Lös ut x ur ekvationen
2+3(x+2)=8

-2 

3(x+2)=6
÷3   ÷3
(x+2)=2
-2   -2
x=0

Algebraisk lösning.


Lös exkvationen 5x-(2+x)=10

Använd av föra metod eller med GEOGEBRA
5x - (2 + x) = 10
5x - 2 - x = 10
Skärning f,g x = 3

x = 3

x^2+2=3

Skärs I två punkter x = 1 och x = -1

Två lösningar möjliga.
X = 1 och X = -1
`,
    'file5': `File 5 - Struggles? It is always fine to ask for help or use assistance from others.
    no matter how small it may be - I am sure someone will be willing to help you out!
    
    Speaking of struggles, I personally find math to be quite challenging at times.
    But with practice and patience, I believe anyone can improve their skills.

    Same with programming - it can be tough to grasp at first, but with dedication, it becomes easier.
    I feel that way about many things in life.  It is okay to struggle, as long as you keep pushing forward.

    But never do something that harms yourself or others.  Always prioritize safety and well-being.

    Remember, everyone has their own strengths and weaknesses. I might share more about my struggles to help others feel less alone.
    
    Am I perfect? No, of course not. But I strive to be the best version of myself every day.
    And I encourage you to do the same!`,
    'file6': `File 6 - Honestly yesterday was a rough day for me and my dear friend Lillie. I dislike the fact her boyfriend is  so hypocritical and just dense. Speaking of dense, I feel like I am talking to a wall 
    that only knows how to say stupid stuff or just be rude. Consider that very same wall cried to me about the very same stuff he does. No wonder he blocked me lol.`,
    'file7': `File 7 - Ren files, A retarded simp that is very much a 10/10 in appearance.`,
    'file8': `File 8 - Where to start? Well I can talk about my special friend Saluzo. A guy who is a perfect guy to simp for. Handsome, smart, funny, talented and overall a great person to be around. I am glad to have met him and 
    I hope we can continue to be friends for a long time to come. He has some of his own struggles but he is a strong person who can overcome anything. Keep being awesome Saluzo!`,
    'file9': `File 9 - As much as I love to anger my friend Saluzo, I truly admire him and wish him the best.
    I love making him feel the love he has been due for way too long. I hope he sees me as someone to trust.`,
    'file10': `File 10 - Ahh, Hannes - my most retarded and dumb friend who has some of the worst takes I have ever heard.
    He asks all the time that we are apparently best friends which we are but he is a bit too good at annoying me. I love him to death tho, a great guy who is always there when you need him. Just dont expect any good takes from him lol.`,
    'file11': `File 11 - I have way too many friends named Oliver. I will be honest they are both the same person, same hobbies, same music taste, same humor. It is honestly scary how similar they are.
    But I love them both dearly, they are great people to be around and always make me laugh. I hope we can continue to be friends for a long time to come.`,
    'file12': `File 12 -Lillie A kind british woman 
    who loves to insult and ragebait but is also very nice and cool
    but she is clearly a bit too slow in the head sometimes. I like her honestly, funny and all around a good person to be around. But can be a bit much at times.
    That being when she tries to anger me of course- Who am I to complain tho? LELELEL`,
    'file13': `File 13 - My head feels empty so I will just write random stuff here.
    The sky is blue, the grass is green.
    I like to eat ice cream on a sunny day.

    Programming is fun when you understand it.
    Cats are cute and dogs are loyal.

    Life is a journey full of ups and downs.
    Music can lift your spirits and make you dance.
    Books can take you to magical worlds and teach you new things. But I hate reading books and dancing.

    Friends are important for support and companionship.
    Family is the foundation of love and belonging.
    But I am a huge loner and prefer to be alone most of the time.`,
    'file14': `File 14 - Add your content here`,
    'file15': `File 15 - Add your content here`,
    'file16': `File 16 - Add your content here`,
    'file17': `File 17 - Add your content here`,
    'file18': `File 18 - Add your content here`,
    'file19': `File 19 - Add your content here`,
    'file20': `File 20 - Add your content here`,
    'file21': `File 21 - Add your content here`,
    'file22': `File 22 - Add your content here`,
    'file23': `File 23 - Add your content here`,
    'file24': `File 24 - Add your content here`,
    'file25': `File 25 - Add your content here`,
    'file26': `File 26 - Add your content here`,
    'file27': `File 27 - Add your content here`,
    'file28': `File 28 - Add your content here`,
    'file29': `File 29 - Add your content here`,
    'file30': `File 30 - Add your content here`,
    'file31': `File 31 - Add your content here`,
    'file32': `File 32 - Add your content here`,
    'file33': `File 33 - Add your content here`,
    'file34': `File 34 - Add your content here`,
    'file35': `File 35 - Add your content here`,
    'file36': `File 36 - Add your content here`,
    'file37': `File 37 - Add your content here`,
    'file38': `File 38 - Add your content here`,
    'file39': `File 39 - Add your content here`,
    'file40': `File 40 - Add your content here`,
    'file41': `File 41 - Add your content here`,
    'file42': `File 42 - Add your content here`,
    'file43': `File 43 - Add your content here`,
    'file44': `File 44 - Add your content here`,
    'file45': `File 45 - Add your content here`,
    'file46': `File 46 - Add your content here`,
    'file47': `File 47 - Add your content here`,
    'file48': `File 48 - Add your content here`,
    'file49': `File 49 - Add your content here`,
    'file50': `File 50 - Add your content here`,
    'file51': `File 51 - Add your content here`,
    'file52': `File 52 - Add your content here`,
    'file53': `File 53 - Add your content here`,
    'file54': `File 54 - Add your content here`,
    'file55': `File 55 - Add your content here`,
    'file56': `File 56 - Add your content here`,
    'file57': `File 57 - Add your content here`,
    'file58': `File 58 - Add your content here`,
    'file59': `File 59 - Add your content here`,
    'file60': `File 60 - Add your content here`,
    'file61': `File 61 - Add your content here`,
    'file62': `File 62 - Add your content here`,
    'file63': `File 63 - Add your content here`,
    'file64': `File 64 - Add your content here`,
    'file65': `File 65 - Add your content here`,
    'file66': `File 66 - Add your content here`,
    'file67': `File 67 - Hannes is a dumb fuck. Why am I not surprised he picked this file?`,
    'file68': `File 68 - Add your content here`,
    'file69': `File 69 - I am actually a gooner, deal with it.`,
    'file70': `File 70 - Add your content here`,
    'file71': `File 71 - Add your content here`,
    'file72': `File 72 - Add your content here`,
    'file73': `File 73 - Add your content here`,
    'file74': `File 74 - Add your content here`,
    'file75': `File 75 - Add your content here`,
    'file76': `File 76 - Add your content here`,
    'file77': `File 77 - Add your content here`,
    'file78': `File 78 - Add your content here`,
    'file79': `File 79 - Add your content here`,
    'file80': `File 80 - Add your content here`,
    'file81': `File 81 - Add your content here`,
    'file82': `File 82 - Add your content here`,
    'file83': `File 83 - Add your content here`,
    'file84': `File 84 - Add your content here`,
    'file85': `File 85 - Add your content here`,
    'file86': `File 86 - Add your content here`,
    'file87': `File 87 - Add your content here`,
    'file88': `File 88 - Add your content here`,
    'file89': `File 89 - Add your content here`,
    'file90': `File 90 - Add your content here`,
    'file91': `File 91 - Add your content here`,
    'file92': `File 92 - Add your content here`,
    'file93': `File 93 - Add your content here`,
    'file94': `File 94 - Add your content here`,
    'file95': `File 95 - Add your content here`,
    'file96': `File 96 - Add your content here`,
    'file97': `File 97 - Add your content here`,
    'file98': `File 98 - Add your content here`,
    'file99': `File 99 - Add your content here`,
    'file100': `File 100 - Add your content here`,
};

// File data object with metadata - all files start as edited today
const files = {};
const todayDate = new Date('2026-01-20').toISOString().split('T')[0];
for (const [key, content] of Object.entries(filesContent)) {
    files[key] = {
        name: key,
        content: content,
        lastEdited: todayDate
    };
}


function initializeFiles() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    
    for (let i = 1; i <= 100; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = `📄 file${i}.txt`;
        fileItem.onclick = (e) => showFile(`file${i}`, e);
        fileList.appendChild(fileItem);
    }
    
    
    showFile('file1', null);
}


function showFilesPage() {
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('files-viewer').style.display = 'block';
    
    initializeFiles();
}


function closeFilesPage() {
    document.getElementById('files-viewer').style.display = 'none';
    document.getElementById('hero-section').style.display = 'block';
}


function goBack() {
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('files-viewer').style.display = 'none';
}


function showFile(fileKey, evt) {
    const fileContent = document.getElementById('fileContent');
    const file = files[fileKey];
    
    if (file) {
        document.querySelectorAll('.file-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Set active class on the clicked element if event exists
        if (evt && evt.target) {
            evt.target.classList.add('active');
        } else {
            // If called programmatically, find and set active class by file key
            document.querySelectorAll('.file-item').forEach(item => {
                if (item.textContent.includes(fileKey)) {
                    item.classList.add('active');
                }
            });
        }
        
        
        const lastEditedDate = new Date(file.lastEdited);
        const today = new Date('2026-01-20'); // Use the current date
        const daysSinceEdit = Math.floor((today - lastEditedDate) / (1000 * 60 * 60 * 24));
        
        
        let statusText = '';
        let statusColor = '';
        if (daysSinceEdit === 0) {
            statusText = 'Edited today';
            statusColor = '#3fb950';
        } else if (daysSinceEdit === 1) {
            statusText = 'Unedited for 1 day';
            statusColor = '#ffd700';
        } else {
            statusText = `Unedited for ${daysSinceEdit} days`;
            statusColor = daysSinceEdit > 30 ? '#f85149' : '#d29922';
        }
        
        
        fileContent.innerHTML = `
            <div class="file-info">
                → ${file.name}.txt | Size: ${file.content.length} bytes | UTF-8 | Last edited: ${file.lastEdited}
            </div>
            <div class="file-status" style="color: ${statusColor}; margin-bottom: 16px; font-size: 12px; padding: 8px 16px; background-color: rgba(${statusColor === '#3fb950' ? '63, 185, 80' : statusColor === '#ffd700' ? '255, 215, 0' : '248, 81, 73'}, 0.1); border-radius: 4px; border-left: 3px solid ${statusColor};">
                ⏱ ${statusText}
            </div>
            <button class="edit-file-btn" onclick="editFile('${fileKey}')" style="margin-bottom: 16px;">✏️ Edit File</button>
            <pre class="file-code">${escapeHtml(file.content)}</pre>
        `;
        fileContent.style.display = 'block';
    }
}

// Edit file function
function editFile(fileKey) {
    if (!isOwnerAuthenticated) {
        showLoginModal();
        return;
    }
    
    const file = files[fileKey];
    const modal = document.getElementById('editModal');
    const textarea = document.getElementById('fileEditor');
    const saveBtn = document.getElementById('saveFileBtn');
    
    // Set current content in textarea
    textarea.value = file.content;
    
    // Update save button to save this specific file
    saveBtn.onclick = () => {
        file.content = textarea.value;
        // Update lastEdited to today
        const today = new Date('2026-01-20').toISOString().split('T')[0];
        file.lastEdited = today;
        
        // Close modal and refresh display
        modal.style.display = 'none';
        showFile(fileKey);
    };
    
    // Show modal
    modal.style.display = 'block';
}

// Show login modal
function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';
}

// Close login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Show viewer login modal
function showViewerLoginModal() {
    document.getElementById('viewerLoginModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('viewerPasswordInput').focus();
}

// Close viewer login modal
function closeViewerLoginModal() {
    document.getElementById('viewerLoginModal').style.display = 'none';
}

// Authenticate owner
function authenticateOwner() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('loginError');
    
    if (passwordInput.value === OWNER_PASSWORD) {
        isOwnerAuthenticated = true;
        errorMsg.style.display = 'none';
        closeLoginModal();
        passwordInput.value = '';
    } else {
        errorMsg.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Authenticate viewer
function authenticateViewer() {
    const passwordInput = document.getElementById('viewerPasswordInput');
    const errorMsg = document.getElementById('viewerLoginError');
    
    if (passwordInput.value === VIEWER_PASSWORD) {
        isViewerAuthenticated = true;
        errorMsg.style.display = 'none';
        closeViewerLoginModal();
        document.getElementById('viewerLoginModal').style.display = 'none';
        document.body.classList.remove('unauthenticated');
        document.body.style.overflow = 'auto';
        passwordInput.value = '';
    } else {
        errorMsg.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Allow Enter key to login
document.addEventListener('DOMContentLoaded', function() {
    // Add unauthenticated class to body on load
    document.body.classList.add('unauthenticated');
    
    // Show viewer login modal on page load
    if (!isViewerAuthenticated) {
        showViewerLoginModal();
    }
    
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                authenticateOwner();
            }
        });
    }
    
    const viewerPasswordInput = document.getElementById('viewerPasswordInput');
    if (viewerPasswordInput) {
        viewerPasswordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                authenticateViewer();
            }
        });
    }
    
    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip if this is the Files link (it has its own onclick handler)
            if (this.getAttribute('href') === '#files') {
                return;
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the # from href
            
            // Hide all sections
            document.getElementById('hero-section').style.display = 'none';
            document.getElementById('files-viewer').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            
            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
    
    // Add flash animation to all buttons on click
    // Add flash animation to all buttons on click
    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target && target.classList && (target.classList.contains('btn') || target.classList.contains('edit-file-btn') || target.classList.contains('btn-back'))) {
            // Remove flash class first to reset animation
            target.classList.remove('flash');
            // Trigger reflow to restart animation
            void target.offsetWidth;
            // Add flash class
            target.classList.add('flash');
            // Remove the flash class after animation completes
            setTimeout(() => {
                target.classList.remove('flash');
            }, 350);
        }
    }, true);
});

// Close modal
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Handle command input
function handleCommandInput(key) {
    if (key === 'Enter') {
        // This will be handled by shift+enter in the keydown event
        return;
    }
    
    // Add character to command input
    if (key.length === 1) {
        commandInput += key;
        updateCommandDisplay();
    } else if (key === 'Backspace') {
        commandInput = commandInput.slice(0, -1);
        updateCommandDisplay();
    }
}

function updateCommandDisplay() {
    const commandLog = document.getElementById('commandLog');
    if (commandLog) {
        commandLog.textContent = '//WRITE COMMAND: ' + commandInput;
    }
}

function submitCommand() {
    const cmd = commandInput.trim().toUpperCase();
    if (cmd === 'SHOWSCRTBTTN1' || cmd === 'SCRTBTTN1/SHORTCUT') {
        showSecretButton();
    }
    if (cmd === 'CMND/JSC2/100' || cmd === 'SCRTJSC/SHORTCUT') {
        triggerJumpscare();
    }
    commandInput = '';
    updateCommandDisplay();
}

// Show the secret button when sequence is complete
function showSecretButton() {
    const secretBtn = document.getElementById('secretNavButton');
    if (secretBtn) {
        secretBtn.style.display = 'inline-block';
        secretBtn.classList.add('flash');
    }
    const commandLog = document.getElementById('commandLog');
    if (commandLog) {
        commandLog.textContent = 'Command accepted';
    }
    console.log('Secret sequence unlocked!');
}

// Show random cat images with 1/100 chance of a jumpscare GIF
function showCatImages() {
    const modal = document.getElementById('catImageModal');
    const container = document.getElementById('catImagesContainer');

    // Check for 1 in 100 chance of jumpscare
    const scareChance = Math.random();
    if (scareChance < 0.01) {
        // Play loud screech and display the provided jumpscare GIF immediately
        try { playScarySoundEffect(); } catch (e) { console.warn('Audio failed:', e); }
        container.innerHTML = `<img src="https://cdn.discordapp.com/attachments/1449824986368966736/1459143525840191628/togif.gif" alt="jumpscare" style="width:100%; height:100%; object-fit:contain; display:block;">`;
        modal.style.display = 'block';
        return;
    }

    container.innerHTML = '';

    // Fetch random cat images
    fetch('https://api.thecatapi.com/v1/images/search?limit=6')
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = 'Random cat';
                img.className = 'cat-image';
                container.appendChild(img);
            });
        })
        .catch(error => {
            // Fallback if API fails
            container.innerHTML = '<p style="color: #ffffff; text-align: center;">😺 Meow! Cat API unavailable, but here\'s a cute cat emoji!</p>';
        });

    modal.style.display = 'block';
}

// Close cat images modal
function closeCatImages() {
    const modal = document.getElementById('catImageModal');
    modal.style.display = 'none';
}

// Trigger jumpscare and GIF instantly via command
function triggerJumpscare() {
    const modal = document.getElementById('catImageModal');
    const container = document.getElementById('catImagesContainer');
    
    if (!modal || !container) {
        console.error('Modal or container not found');
        return;
    }
    
    // Clear any previous content
    container.innerHTML = '';
    
    // Play scary sound and display jumpscare GIF
    try { playScarySoundEffect(); } catch (e) { console.warn('Audio failed:', e); }
    
    // Create and append the image
    const img = document.createElement('img');
    img.src = 'images/jumpscare.png';
    img.alt = 'jumpscare';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    container.appendChild(img);
    
    modal.style.display = 'block';
    
    const commandLog = document.getElementById('commandLog');
    if (commandLog) {
        commandLog.textContent = '⚠️ JUMPSCARE ACTIVATED ⚠️';
    }
    console.log('Jumpscare triggered!');
}

// Play scary sound effect (1/1000 chance)
function playScarySoundEffect() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    
    // Create a loud, scary noise
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    // Create a jarring sound effect
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.5);
    
    osc.start(now);
    osc.stop(now + 0.5);
}

// Initialize keyboard listener for command input
document.addEventListener('keydown', function(event) {
    // Only listen for commands in files-viewer
    const filesViewer = document.getElementById('files-viewer');
    if (!filesViewer || filesViewer.style.display === 'none') {
        return;
    }
    
    // Submit command on Enter (Shift+Enter also supported)
    if (event.key === 'Enter') {
        event.preventDefault();
        submitCommand();
        return;
    }
    
    // Handle backspace
    if (event.key === 'Backspace') {
        event.preventDefault();
        commandInput = commandInput.slice(0, -1);
        updateCommandDisplay();
        return;
    }
    
    // Handle regular character input (alphanumeric and symbols)
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        commandInput += event.key;
        updateCommandDisplay();
    }
});
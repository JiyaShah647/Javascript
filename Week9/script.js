            document.addEventListener('DOMContentLoaded', loadNotes);

            function loadNotes() {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.forEach((note, index) => displayNote(note, index));
            }

            function addNote() {
            const noteInput = document.getElementById('noteInput');
            const noteText = noteInput.value.trim();

            if (noteText === '') {
                alert('Please write a note before adding.');
                return;
            }

            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));

            displayNote(noteText, notes.length - 1);
            noteInput.value = '';
            }

            function displayNote(noteText, index) {
            const notesList = document.getElementById('notesList');

            const noteItem = document.createElement('div');
            noteItem.className = 'note-item';
            noteItem.innerHTML = `
                <span>${noteText}</span>
                <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
            `;
            notesList.appendChild(noteItem);
            }

            function deleteNote(index) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));

            document.getElementById('notesList').innerHTML = '';
            loadNotes();
            }

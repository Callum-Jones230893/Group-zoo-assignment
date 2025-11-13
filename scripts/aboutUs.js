////Constructor////

function teamMate(first, last, country, description, pet) {
  this.first = first
  this.last = last
  this.country = country
  this.description = description
  this.pet = pet
}

////Creating each member////
let callum = new teamMate('Callum', 'Jones', 'Callum is from Australia', 'lorem ipsum', 'Callum has a pet crocodile whom he named "Rob" - after his favorite teacher.')
let seth = new teamMate('Seth', 'Armistead', 'Seth is from USA', 'lorem ipsum', 'Seth has a cat')
let clara = new teamMate('Clara', 'Swann', 'Clara is from Sweden.', 'lorem ipsum', 'Clara has a hamster')
let brianna = new teamMate('Brianna', 'Swann', 'Brianna is from China', 'lorem ipsum', 'Brianna has a cat')
let nathalie = new teamMate('Nathalie', 'Buss', 'Nathalie is from Sweden', 'lorem ipsum', 'Nathalie has a cat.')
let defaultMessage = new teamMate('Team', 'Members', '', 'Our team has members from all over the world! We are excited to have you visit our zoo.', '')

let teamMates = [callum, seth, clara, brianna, nathalie]

////Functions////

const setActiveMember = (member) => activeTeamMate = member

const appendContainer = (member) => {
  let textArea = document.querySelector('.main_content')
  let subtitle = document.querySelector('.subtitle')
  subtitle.textContent = `${member.first} ${member.last}`
}

const appendMember = (member) => {
  let memberArea = document.querySelector('.team_members')
  memberArea.innerHTML = ''
  appendContainer(member)
  let memberPairs = Object.entries(member)
  for (let i = 2; i < memberPairs.length; i++) {
    let memberData = document.createElement('div')
    memberData.textContent = memberPairs[i][1]
    memberData.className = memberPairs[i][0]
    memberArea.appendChild(memberData)
  }
  listTeamMates(member)
}

const listTeamMates = (active = defaultMessage) => {
  let sidebar = document.querySelector('.sidebar')
  sidebar.innerHTML = ''
  teamMates.forEach(member => {
    let teamMate = document.createElement('div')
    teamMate.textContent = member.first
    teamMate.className = 'sidebarItem'
    if (member === active){
    teamMate.addEventListener('click', () => {setActiveMember(member), appendMember(defaultMessage)}, {once:true})
    teamMate.className = 'sidebarItem active'
    } else {
    teamMate.addEventListener('click', () => {setActiveMember(member), appendMember(member)}, {once:true})
    }
    sidebar.appendChild(teamMate)
  });
}

appendMember(defaultMessage)
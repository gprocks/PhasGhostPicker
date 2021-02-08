import { evidence } from './constants'

export class Ghost {
  constructor (name) {
    this.name = name
    this.evidenceTypes = []
  }
}

export class Banshee extends Ghost {
  constructor () {
    super('Banshee')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.emf,
      evidence.fingerprints
    ]
  }
}

export class Demon extends Ghost {
  constructor () {
    super('Demon')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.spiritBox,
      evidence.spiritWriting
    ]
  }
}

export class Jinn extends Ghost {
  constructor () {
    super('Jinn')
    this.evidenceTypes = [
      evidence.emf,
      evidence.orbs,
      evidence.spiritBox
    ]
  }
}

export class Mare extends Ghost {
  constructor () {
    super('Mare')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.orbs,
      evidence.spiritBox
    ]
  }
}

export class Oni extends Ghost {
  constructor () {
    super('Oni')
    this.evidenceTypes = [
      evidence.emf,
      evidence.spiritBox,
      evidence.writing
    ]
  }
}

export class Phantom extends Ghost {
  constructor () {
    super('Phantom')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.emf,
      evidence.orbs
    ]
  }
}

export class Poltergeist extends Ghost {
  constructor () {
    super('Poltergeist')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.spiritBox,
      evidence.fingerprints
    ]
  }
}

export class Revenant extends Ghost {
  constructor () {
    super('Revenant')
    this.evidenceTypes = [
      evidence.emf,
      evidence.writing,
      evidence.fingerprints
    ]
  }
}

export class Shade extends Ghost {
  constructor () {
    super('Shade')
    this.evidenceTypes = [
      evidence.emf,
      evidence.orbs,
      evidence.spiritWriting
    ]
  }
}

export class Spirit extends Ghost {
  constructor () {
    super('Spirit')
    this.evidenceTypes = [
      evidence.spiritBox,
      evidence.spiritWriting,
      evidence.fingerprints
    ]
  }
}

export class Wraith extends Ghost {
  constructor () {
    super('Wraith')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.spiritBox,
      evidence.fingerprints
    ]
  }
}

export class Yurei extends Ghost {
  constructor () {
    super('Yurei')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.orbs,
      evidence.spiritWriting
    ]
  }
}

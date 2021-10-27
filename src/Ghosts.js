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
      evidence.orbs,
      evidence.fingerprints,
      evidence.projector
    ]
  }
}

export class Demon extends Ghost {
  constructor () {
    super('Demon')
    this.evidenceTypes = [
      evidence.freezing,
      evidence.fingerprints,
      evidence.spiritWriting
    ]
  }
}

export class Goryo extends Ghost {
  constructor () {
    super('Goryo')
    this.evidenceTypes = [
      evidence.emf,
      evidence.fingerprints,
      evidence.projector
    ]
  }
}

export class Hantu extends Ghost {
  constructor () {
    super('Hantu')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.freezing,
      evidence.fingerprints
    ]
  }
}

export class Jinn extends Ghost {
  constructor () {
    super('Jinn')
    this.evidenceTypes = [
      evidence.emf,
      evidence.freezing,
      evidence.fingerprints
    ]
  }
}

export class Mare extends Ghost {
  constructor () {
    super('Mare')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.spiritBox,
      evidence.spiritWriting
    ]
  }
}

export class Myling extends Ghost {
  constructor () {
    super('Myling')
    this.evidenceTypes = [
      evidence.emf,
      evidence.fingerprints,
      evidence.spiritWriting
    ]
  }
}

export class Obake extends Ghost {
  constructor () {
    super('Obake')
    this.evidenceTypes = [
      evidence.emf,
      evidence.orbs,
      evidence.fingerprints
    ]
  }
}

export class Oni extends Ghost {
  constructor () {
    super('Oni')
    this.evidenceTypes = [
      evidence.emf,
      evidence.freezing,
      evidence.projector
    ]
  }
}

export class Onryo extends Ghost {
  constructor () {
    super('Onryo')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.spiritBox,
      evidence.freezing
    ]
  }
}

export class Phantom extends Ghost {
  constructor () {
    super('Phantom')
    this.evidenceTypes = [
      evidence.spiritBox,
      evidence.fingerprints,
      evidence.projector
    ]
  }
}

export class Poltergeist extends Ghost {
  constructor () {
    super('Poltergeist')
    this.evidenceTypes = [
      evidence.spiritBox,
      evidence.fingerprints,
      evidence.spiritWriting
    ]
  }
}

export class Raiju extends Ghost {
  constructor () {
    super('Raiju')
    this.evidenceTypes = [
      evidence.emf,
      evidence.orbs,
      evidence.projector
    ]
  }
}

export class Revenant extends Ghost {
  constructor () {
    super('Revenant')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.freezing,
      evidence.projector
    ]
  }
}

export class Shade extends Ghost {
  constructor () {
    super('Shade')
    this.evidenceTypes = [
      evidence.emf,
      evidence.freezing,
      evidence.spiritWriting
    ]
  }
}

export class Spirit extends Ghost {
  constructor () {
    super('Spirit')
    this.evidenceTypes = [
      evidence.emf,
      evidence.spiritBox,
      evidence.spiritWriting
    ]
  }
}

export class Twins extends Ghost {
  constructor () {
    super('The Twins')
    this.evidenceTypes = [
      evidence.emf,
      evidence.spiritBox,
      evidence.freezing
    ]
  }
}

export class Wraith extends Ghost {
  constructor () {
    super('Wraith')
    this.evidenceTypes = [
      evidence.emf,
      evidence.spiritBox,
      evidence.projector
    ]
  }
}

export class Yokai extends Ghost {
  constructor () {
    super('Yokai')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.spiritBox,
      evidence.projector
    ]
  }
}

export class Yurei extends Ghost {
  constructor () {
    super('Yurei')
    this.evidenceTypes = [
      evidence.orbs,
      evidence.freezing,
      evidence.projector
    ]
  }
}

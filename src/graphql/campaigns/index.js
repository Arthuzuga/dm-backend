import { gql } from 'apollo-server-koa'

export default gql`
  type Campaign {
    id: Int
    title: String
    url: String
    system: String
    summary: String
    players: [Player]
    sessions: [Session]
    npcs: [NPCs]
    notes: [Notes]
  }

  type NPCs {
    id: Int
    name: String
    age: Int
    raceType: RaceEnum
    alignment: AlignmentEnum
    ideal: String
    bond: String
    flaw: String
    background: String
    affiliation: String
  }

  type Notes {
    id: Int
    title: String
    description: String
    url: String
  }

  type Player {
    id: Int
    name: String
    character: String
    avatar: String
    race: RaceEnum
    class: ClassEnum
    level: Int
    email: String
  }

  enum RaceEnum {
    Humano
    Anao
    Elfo
    Halfling
    MeioElfo
    MeioOrc
    Dragonborn
    Tiefling
    Gnomo
    Kenku
    Tabaxi
  }

  enum ClassEnum {
    Barbaro
    Bardo
    Clerigo
    Fighter
    Paladino
    Monge
    Warlock
    Druida
    Mago
    Ranger
    Rogue
  }

  type Session {
    id: Int
    title: String
    description: String
    summary: String
    chapters: [Chapter]
    notes: [Notes]
  }

  type Chapter {
    id: Int
    description: [DescriptionType]
    playlist: [Music]
    npcs: [NPCs]
    equipments: [Equipment]
    challenges: [Challenge]
    monsters: [Monster]
  }

  type DescriptionType {
    id: Int
    text: String
    isSpeak: Boolean
  }

  type Challenge {
    id: Int
    title: String
    dc: Int
    skill: SkillEnum
    players: [Player]
    secret: Boolean
  }

  enum SkillEnum {
   Atletismo
   Acrobacia
   Lidar com Animais
   Arcanismo
   Atuacao
   Blefar
   Furtividade
   Historia
   Intimidacao
   Intuicao
   Investigacao
   Medicina
   Natureza
   Percepcao
   Persuasao
   Presdigitacao
   Religiao
   Sobrevivencia
   Forca
   Destreza
   Constituicao
   Inteligencia
   Sabedoria
   Carisma
  }

  type Music {
    loop: Boolean
    playing: Boolean
    softstop: Boolean
    source: String
    tags: String
    title: String
    track_id: String
    volume: Int
    libreaudio: Boolean
  }

  type Equipment {
    index: String
    name: String
    cost: CostType
    equipment_category: String
  }

  type CostType {
      quantity: Int
      unit: String
    }

  type Monster {
    quantity: Int
    index: String
    name: String
    size: String
    type: String
    subtype: String
    alignment: AlignmentEnum
    armor_class: Int
    hit_points: Int
    hit_dice: String
    speed: SpeedType
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    proficiencies: [Proficiency]
    damage_vulnerabilities: [String]
    damage_resistances: [String]
    damage_immunities: [String]
    condition_immunities:[ConditionType]
    senses: SenseType
    languages: String
    challenge_rating: Float
    special_abilities: [SpecialAbilityType]
    actions: [ActionType]
    url: String
  }

  type SpeedType {
      walk: String
      swim: String
      fly: String
      climb:String
  }
  
  type SenseType {
      darkvision: String
      passive_perception: Int
    }

  type ActionType {
    name: String
    desc: String
    attack_bonus: Int
    damage: [DamageType]
    
  }

  type DamageType {
    damage_type: DamageTypeType
    damage_dice: String
    damage_bonus: Int
  }

  type DamageTypeType {
      name: String
      url: String
    }

  type SpecialAbilityType {
    name: String
    desc: String
  }

  type ConditionType {
    name: String
    url: String
  }

  type Proficiency {
    name: String
    url: String
    value: Int
  }

  enum AlignmentEnum {
    LawfulGood
    LawfulNeutral
    LawfulEvil
    NeutralGood
    TrueNeutral
    NeutralEvil
    ChaoticGood
    ChaoticNeutral
    ChaoticEvil
  }

  type StandardReponse {
    executed: Boolean
  }

  type Query {
    getCampaign(id: String): Campaign
    getSession(campaignid: String, sessionId: String): Session
    listCampaigns: [Campaign]
    listSessions(campaignid: String): [Session]
    getMonster(id: String): Monster
    listMonsters: [Monster]
  }

  type Mutation {
    addCampaign(
      name: String
      ): Campaign
      
    addSession(
      campaignid: String,
      name: String
      ): Session

    deleteCampaign(
      id: String
      ): StandardReponse

    deleteSession(
      campaignid: String,
      id: String
      ): StandardReponse
  }
`
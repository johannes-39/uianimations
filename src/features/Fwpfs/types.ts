export type FwpfProp = {
    id: number;
    label: string;
    sws: number;
    prof: string;
    pruefung: string;
    vorkenntnisse: string;
    zusammenfassung: string;
    auslastung: number;
    fachbereich: string;
}

export type MassgabenProp = {
    studiengang: string;
    voraussetzung: string;
    infos: string;
    zusatzinfo: string;
    hinweis: string;
    stundenplaninfo: string
}

export type SwsProp = {
    sws: string;
    info: string;
    min: number;
}

export type AbsolviertProp = {
    fwpfId: number;
    semester: string;
    note: string;
}
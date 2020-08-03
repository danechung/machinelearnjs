"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @ignore
 * @type {Array<string>}
 */
exports.ENGLISH_STOP_WORDS = [
    'a',
    'about',
    'above',
    'across',
    'after',
    'afterwards',
    'again',
    'against',
    'all',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'am',
    'among',
    'amongst',
    'amoungst',
    'amount',
    'an',
    'and',
    'another',
    'any',
    'anyhow',
    'anyone',
    'anything',
    'anyway',
    'anywhere',
    'are',
    'around',
    'as',
    'at',
    'back',
    'be',
    'became',
    'because',
    'become',
    'becomes',
    'becoming',
    'been',
    'before',
    'beforehand',
    'behind',
    'being',
    'below',
    'beside',
    'besides',
    'between',
    'beyond',
    'bill',
    'both',
    'bottom',
    'but',
    'by',
    'call',
    'can',
    'cannot',
    'cant',
    'co',
    'con',
    'could',
    'couldnt',
    'cry',
    'de',
    'describe',
    'detail',
    'do',
    'done',
    'down',
    'due',
    'during',
    'each',
    'eg',
    'eight',
    'either',
    'eleven',
    'else',
    'elsewhere',
    'empty',
    'enough',
    'etc',
    'even',
    'ever',
    'every',
    'everyone',
    'everything',
    'everywhere',
    'except',
    'few',
    'fifteen',
    'fifty',
    'fill',
    'find',
    'fire',
    'first',
    'five',
    'for',
    'former',
    'formerly',
    'forty',
    'found',
    'four',
    'from',
    'front',
    'full',
    'further',
    'get',
    'give',
    'go',
    'had',
    'has',
    'hasnt',
    'have',
    'he',
    'hence',
    'her',
    'here',
    'hereafter',
    'hereby',
    'herein',
    'hereupon',
    'hers',
    'herself',
    'him',
    'himself',
    'his',
    'how',
    'however',
    'hundred',
    'i',
    'ie',
    'if',
    'in',
    'inc',
    'indeed',
    'interest',
    'into',
    'is',
    'it',
    'its',
    'itself',
    'keep',
    'last',
    'latter',
    'latterly',
    'least',
    'less',
    'ltd',
    'made',
    'many',
    'may',
    'me',
    'meanwhile',
    'might',
    'mill',
    'mine',
    'more',
    'moreover',
    'most',
    'mostly',
    'move',
    'much',
    'must',
    'my',
    'myself',
    'name',
    'namely',
    'neither',
    'never',
    'nevertheless',
    'next',
    'nine',
    'no',
    'nobody',
    'none',
    'noone',
    'nor',
    'not',
    'nothing',
    'now',
    'nowhere',
    'of',
    'off',
    'often',
    'on',
    'once',
    'one',
    'only',
    'onto',
    'or',
    'other',
    'others',
    'otherwise',
    'our',
    'ours',
    'ourselves',
    'out',
    'over',
    'own',
    'part',
    'per',
    'perhaps',
    'please',
    'put',
    'rather',
    're',
    'same',
    'see',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'serious',
    'several',
    'she',
    'should',
    'show',
    'side',
    'since',
    'sincere',
    'six',
    'sixty',
    'so',
    'some',
    'somehow',
    'someone',
    'something',
    'sometime',
    'sometimes',
    'somewhere',
    'still',
    'such',
    'system',
    'take',
    'ten',
    'than',
    'that',
    'the',
    'their',
    'them',
    'themselves',
    'then',
    'thence',
    'there',
    'thereafter',
    'thereby',
    'therefore',
    'therein',
    'thereupon',
    'these',
    'they',
    'thick',
    'thin',
    'third',
    'this',
    'those',
    'though',
    'three',
    'through',
    'throughout',
    'thru',
    'thus',
    'to',
    'together',
    'too',
    'top',
    'toward',
    'towards',
    'twelve',
    'twenty',
    'two',
    'un',
    'under',
    'until',
    'up',
    'upon',
    'us',
    'very',
    'via',
    'was',
    'we',
    'well',
    'were',
    'what',
    'whatever',
    'when',
    'whence',
    'whenever',
    'where',
    'whereafter',
    'whereas',
    'whereby',
    'wherein',
    'whereupon',
    'wherever',
    'whether',
    'which',
    'while',
    'whither',
    'who',
    'whoever',
    'whole',
    'whom',
    'whose',
    'why',
    'will',
    'with',
    'within',
    'without',
    'would',
    'yet',
    'you',
    'your',
    'yours',
    'yourself',
    'yourselves',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcF93b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZV9leHRyYWN0aW9uL3N0b3Bfd29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0dBR0c7QUFDVSxRQUFBLGtCQUFrQixHQUFHO0lBQ2hDLEdBQUc7SUFDSCxPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLE9BQU87SUFDUCxTQUFTO0lBQ1QsS0FBSztJQUNMLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLFNBQVM7SUFDVCxNQUFNO0lBQ04sVUFBVTtJQUNWLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLElBQUk7SUFDSixLQUFLO0lBQ0wsU0FBUztJQUNULEtBQUs7SUFDTCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLEtBQUs7SUFDTCxRQUFRO0lBQ1IsSUFBSTtJQUNKLElBQUk7SUFDSixNQUFNO0lBQ04sSUFBSTtJQUNKLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLEtBQUs7SUFDTCxJQUFJO0lBQ0osTUFBTTtJQUNOLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLElBQUk7SUFDSixLQUFLO0lBQ0wsT0FBTztJQUNQLFNBQVM7SUFDVCxLQUFLO0lBQ0wsSUFBSTtJQUNKLFVBQVU7SUFDVixRQUFRO0lBQ1IsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNM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
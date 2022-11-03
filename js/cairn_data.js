gen_data['character'] = [
    'You are <i> {name} </i>, formerly {background}.<br>You have {physique} physique, {skin} skin, {hair} hair, and {face} face.<br>You speak in a {speech} manner and wear {clothing} clothing.<br>You are {vice} yet {virtue}, and are generally regarded as {reputation}. <br>Your favourite food is {food}.'
]

gen_data['name'] = [
    'Анйалык «имеющий байдару»', 'Ивакак «ищущий»', 'Кайак «каяк»', 'Напагйак «мачта»', 'Паналык «с копьем»', 'Нагуя «чайка»', 'Нанухак «медвежонок»', 'Анука «ветер»', 'Апая «дедушка»', 'Ила «друг»', 'Имагми «морской»', 'Анылги «большой»', 'Нулик «жена»', 'Минлу «стена»', 'Нигугйак «свет»', 'Кайутак «блюдо»', 'Униткак «оставленная»', 'Аса «нижняя»', 'Инира «звезда»'
]


gen_data['background'] = [
    'охотник'
    ,  'резчик по кости'
    ,  'ученик шамана'
    ,  'охотник'
    ,  'рыбак'
    ,  'охотник'
    ,  'плотник лодочник'
    ,  'рыбак'
]

gen_data['physique'] = [
    'a statuesque'
    ,  'a brawny'
    ,  'a towering'
    ,  'a stout'
    ,  'a rugged'
    ,  'an athletic'
    ,  'a lanky'
    ,  'a short'
    ,  'a scrawny'
    ,  'a flabby'
]

gen_data['skin'] = [
    'dark'
    ,  'a birthmark on your'
    ,  'tanned'
    ,  'pockmarked'
    ,  'weathered'
    ,  'oily'
    ,  'pale'
    ,  'perfect'
    ,  'rosy'
    ,  'tattooed'
]

gen_data['hair'] = [
    'bald'
    ,  'braided'
    ,  'oily'
    ,  'wavy'
    ,  'curly'
    ,  'long'
    ,  'wispy'
    ,  'filthy'
    ,  'frizzy'
    ,  'luxurious'
]

gen_data['face'] = [
    'a chiseled'
    ,  'a square'
    ,  'a bony'
    ,  'a sharp'
    ,  'a sunken'
    ,  'an elongated'
    ,  'a broken'
    ,  'a soft'
    ,  'a rat-like'
    ,  'a round'
]

gen_data['speech'] = [
    'blunt'
    ,  'booming'
    ,  'droning'
    ,  'gravelly'
    ,  'cryptic'
    ,  'formal'
    ,  'stuttering'
    ,  'precise'
    ,  'squeaky'
    ,  'whispery'
]

gen_data['clothing'] = [
    'antique'
    ,  'bloody'
    ,  'rancid'
    ,  'soiled'
    ,  'frumpy'
    ,  'elegant'
    ,  'frayed'
    ,  'foreign'
    ,  'livery'
    ,  'filthy'
]

gen_data['virtue'] = [
    'ambitious'
    ,  'courageous'
    ,  'disciplined'
    ,  'honorable'
    ,  'serene'
    ,  'merciful'
    ,  'humble'
    ,  'tolerant'
    ,  'gregarious'
    ,  'cautious'
]

gen_data['vice'] = [
    'aggressive'
    ,  'bitter'
    ,  'craven'
    ,  'deceitful'
    ,  'greedy'
    ,  'vengeful'
    ,  'lazy'
    ,  'nervous'
    ,  'rude'
    ,  'vain'
]

gen_data['reputation'] = [
    'an oddball'
    ,  'wise'
    ,  'respected'
    ,  'ambitious'
    ,  'repulsive'
    ,  'dangerous'
    ,  'honest'
    ,  'a boor'
    ,  'a loafer'
    ,  'an entertainer'
]

gen_data['food'] = [
    'сырая рыба'
    ,  'мактак (китовья кожа)'
    ,  'кивиак'
    ,  'игунак'
    ,  'акутак'
    ,  'вяленая рыба'
]

gen_data['equipment'] = [
    'armor: {armor}<br>Shield: {helmet}<br>Weapons: {weapons}<br>Items: {tool,gear,trinket}<br>Bonus item: {bonus}'
]
gen_data['armor'] = {
    '1-3': 'No upper body protection',
    '4-14': 'Куртка из толстых шкур (1 Armor, bulky)',
    '15-19': 'Ламинарный доспех  (2 Armor, bulky)',
    '20': 'Ламинарный доспех и крыло (3 Armor, bulky)'
}

gen_data['helmet'] = {
    '1-16': ', no shield',
    '17-20': ', a Shield (+1 Armor)'
}

gen_data['weapons'] = {
    '1-15':'{wgroup1}',
    '15-19':'{wgroup3}',
    '20':'No weapon'
}

gen_data['wgroup1'] = ['Гарпун', 'Нож', 'Дубина']
gen_data['wgroup3'] = ['Лук (bulky)']


gen_data['armor_weapons'] = {
    '1-10':'{armor}',
    '11-20':'{weapons}'
}

gen_data['tool_trinket'] = {
    '1-10':'{tool}',
    '11-20':'{trinket}'
}

gen_data['bonus'] = {
    '1-6': '{tool_trinket}',
    '7-13': '{gear}',
    '14-20': '{amulet}',
}

gen_data['tool'] = [
     'Bucket (stacks)'
    ,  'Caltrops'
    ,  'Chalk'
    ,  'Крюк для плетения сетей'
    ,  'Drill (Manual)'
    ,  'Удочка'
    ,  'клей (stacks)'
    ,  'Китовий жир'
    ,  'Hammer'
    ,  'Hourglass'
    ,  'Игла и нитки'
    ,  'Nails (stacks)'
    ,  'Рыболовная сеть'
    ,  'Пила'
    ,  'Герметик'
    ,  'Лопата'
    ,  'Шкурный нож'
]

gen_data['trinket'] = [
    'Bottle'
    ,  'Card Deck (stacks)'
    ,  'Dice Set (stacks)'
    ,  'Face Paint'
    ,  'Fake Jewels (stacks)'
    ,  'Horn'
    ,  'Incense (stacks)'
    ,  'Instrument'
    ,  'Lens'
    ,  'Marbles (stacks)'
    ,  'Mirror'
    ,  'Perfume'
    ,  'Quill &  Ink'
    ,  'Salt Pack (stacks)'
    ,  'Small Bell'
    ,  'Soap (stacks)'
    ,  'Sponge'
    ,  'Tar Pot'
    ,  'Twine (stacks)'
    ,  'Whistle'
]

gen_data['gear'] = [
    'Air Bladder'
    ,  'Antitoxin'
    ,  'Cart (+4 slots, bulky)'
    ,  'Chain (10ft)'
    ,  'Dowsing Rod'
    ,  'Fire Oil'
    ,  'Grappling Hook '
    ,  'Large Sack'
    ,  'Large Trap'
    ,  'Lockpicks'
    ,  'Manacles'
    ,  'Pick'
    ,  'Pole (10ft)'
    ,  'Pulley'
    ,  'Repellent'
    ,  'Rope (25ft)'
    ,  'Spirit Ward'
    ,  'Spyglass'
    ,  'Tinderbox'
    ,  'Wolfsbane '
]

gen_data['amulet'] = [
    'нерпа'
    ,  'дед (1 слот)'
    ,  'предок'
    ,  'морж'
    ,  'кит'
    ,  'глаз Сила'
]

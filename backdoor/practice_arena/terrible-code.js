b['=='](pwd.length, 13)
b['=='](pwd[0x6], pwd[0xa])
b['=='](pwd[0xa], pwd[0xb])
b['=='](pwd[0x7], pwd[0xc])
b['=='](pwd[0x4], pwd[0x8])
b['=='](pwd[0x0], pwd[0x9])
b['=='](b['x-y'](charCodeAt(0xa), 0x28), 0x8)
!b['x*y'](b['x-y-z'](charCodeAt(0x1), charCodeAt(0xb), 0x1), 0x32145486)
b['=='](b['x*y'](b['x-y-z'](charCodeAt(0x3), charCodeAt(0x1), 0x1),0x2468413), 0x2468413)
b['=='](b['x/y'](charCodeAt(0x7), 0xe), 0x7)
b['=='](b['x%y'](charCodeAt(0x7), 0xe), 0x0)
b['=='](b['x-y'](charCodeAt(0x2), charCodeAt(0xc)), 0x1)
b['=='](b['x%y'](charCodeAt(0x0), 0xb), 0x0)
b['=='](b['x%y'](charCodeAt(0x0), 0xa), 0x0)
b['=='](b['x+y'](b['x/y'](charCodeAt(0x5), 2), 0x1302), 0x1337)
b['=='](b['x>>y'](charCodeAt(0x4), 3), 0xb)
b['=='](b['x%y'](charCodeAt(0x4), 8), 0x7)

password is 13 chars
pwd[0x6] == pwd[0xa] == pwd[0xb] = 0x30 = '0'
pwd[0x7] == pwd[0xc] = 0x62 = 'b'
pwd[0x4] == pwd[0x8]
pwd[0x0] == pwd[0x9] = 0x6e = 'n'

pwd[0x2] = charCodeAt(0xc) + 0x1 = 0x63
pwd[0x5] = 0x6a = 'j'
pwd[0x1] = charCodeAt(0x5) + 0x1 = '1'
pwd[0x3] = charCodeAt(0x1) + 0x2 = '3'

charCodeAt(0x7) / 0xe = 7
charCodeAt(0x7) % 0xe = 0

charCodeAt(0x2) - charCodeAt(0xc) = 1

charCodeAt(0x0) % 0xb = 0
charCodeAt(0x0) % 0xa = 0

charCodeAt(0x5) / 2 = 0x35

charCodeAt(0x1) - charCodeAt(0xb) = 1

charCodeAt(0x3) - charCodeAt(0x1) = 2

charCodeAt(0x4) % 8 = 0x7
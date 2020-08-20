getAllUsers
http://localhost:3333/users

getUserById
http://localhost:3333/user/5ee958530078a463005bcf8b
http://localhost:3333/user?id=5ee958530078a463005bcf8b

getUsersByIds
http://localhost:3333/users/[5ee958530078a463005bcf8b,5ee958530078a463005bcf8c,5ee958530078a463005bcf8d]
http://localhost:3333/users?ids=[5ee958530078a463005bcf8b,5ee958530078a463005bcf8c,5ee958530078a463005bcf8d]


getUsersByExactName
http://localhost:3333/users/Rogerio
http://localhost:3333/users?Ename=Rogerio
singular pois pode haver usuários com mesmo nome

getUsersByExactNames
http://localhost:3333/users/[Rogerio,Alfredo]
http://localhost:3333/users?Enames=[Rogerio,Alfredo]

getUsersByName
http://localhost:3333/users/Rog
http://localhost:3333/users?name=Rog

getUsersByNames
http://localhost:3333/users/[Rog,Alf]
http://localhost:3333/users?name=[Rog,Alf]


getUsersByExactOccupation
http://localhost:3333/users/pedreiro
http://localhost:3333/users?EOccupation=pedreiro

getUsersByExactOccupations
http://localhost:3333/users/[Rogerio,Alfredo]
http://localhost:3333/users?EOccupations=[Rogerio,Alfredo]

getUsersByOccupation
http://localhost:3333/users/Rog
http://localhost:3333/users?Occupation=Rog

getUsersByOccupations
http://localhost:3333/users/[Rog,Alf]
http://localhost:3333/users?Occupation=[Rog,Alf]
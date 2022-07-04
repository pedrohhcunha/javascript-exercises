### 1 - Escreva uma função Javascript que verifique se uma variável é ou não um Array:

```js
// Input example:
isArray(6)
isArray([0, 8, 28, 89])
isArray([])
isArray({
	'a': [0, 29, 'sdds']
})

// Expected output:
False
True
True
False
```

### 2 - Escreva uma função que seja capaz de retornar o primeiro e o ultimo elemento de uma Array:

```js
// Input example
getEnds([3, 8, 9, 92])
getEnds([10, 78, 10, 9])
getEnds([False, True, 9, 89])
getEnds([7])

// Expected output
3, 8
10, 9
False, True
7, 7
```

### 3 - Escreva uma função que seja capaz de retornar o tamanho de uma Array:

```js
// Input example
getLength([3, 8, 9, 92])
getLength([10, 78, 10, 9])
getLength([False, True, 9, 89])
getLength([7])

// Expected output
4
4
4
1
```
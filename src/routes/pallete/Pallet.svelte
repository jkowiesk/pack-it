<script>
	import { T, Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	const PALLET_THICK = 0.05;

	const gltf = useGltf('/pallet.glb');
	console.log(gltf.then((g) => console.log(g)));
</script>

{#if $gltf}
	<T.Group rotation.x={Math.PI} scale={0.22} position={[0, -0.1, 0]}>
		<Object3DInstance object={$gltf.nodes['Object_2']} />
		<Object3DInstance object={$gltf.nodes['Object_3']} />
		<Object3DInstance object={$gltf.nodes['Object_4']} />
		<Object3DInstance object={$gltf.nodes['Object_5']} />
		<Object3DInstance object={$gltf.nodes['Object_6']} />
	</T.Group>
{/if}

<!-- {#await gltf}
	<p>...waiting</p>
{:then gltf}
	<T.Group>
		<T.Mesh
			geometry={gltf.scene.children[0].geometry}
			material={gltf.scene.children[0].material}
			scale={[1, 1, 1]}
			position={[0, 0, 0]}
		/>
	</T.Group>
{/await}
 -->

<script>
	import { T, Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	const PALLET_THICK = 0.05;

	const gltf = useGltf('/pallet.glb');
	console.log(gltf.then((g) => console.log(g)));
</script>

{#if $gltf}
	<T.Group
		rotation.x={Math.PI}
		scale={0.22}
		scale.x={0.19}
		scale.z={0.28}
		scale.y={0.22}
		position={[0, -0.032, 0]}
	>
		<Object3DInstance object={$gltf.nodes['Object_2']} />
		<Object3DInstance object={$gltf.nodes['Object_3']} />
		<Object3DInstance object={$gltf.nodes['Object_4']} />
		<Object3DInstance object={$gltf.nodes['Object_5']} />
		<Object3DInstance object={$gltf.nodes['Object_6']} />
	</T.Group>
{/if}

<!-- <T.Mesh rotation.x={Math.PI / 2} position={[0, 0, 0]}>
	<T.BoxGeometry args={[1, 1, PALLET_THICK, 10]} />
	<T.MeshLambertMaterial color="#94a3b8" wireframe />
</T.Mesh>
 -->

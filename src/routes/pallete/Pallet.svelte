<script lang="ts">
	import { T, Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	const gltf = useGltf('/pallet.glb');
	/* 	let group: THREE.Group;

	$: {
		if (group) {
			const box = new THREE.Box3().setFromObject(group);
			const vec = new THREE.Vector3();
			box.getSize(vec);
			console.log(vec);
		}
	} */
</script>

{#if $gltf}
	<T.Group rotation.x={Math.PI} scale={0.24} position={[0, -0.04, 0]}>
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
</T.Mesh> -->

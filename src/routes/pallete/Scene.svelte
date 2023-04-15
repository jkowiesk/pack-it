<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { DirectionalLight } from 'three';

	type Box = {
		state: 'slaped' | 'unslaped';
	};

	const boxes: Box[] = Array(10).fill({ state: 'unslaped' });
	let state;
</script>

<T.PerspectiveCamera makeDefault position={[0, 1, -1]}
	><OrbitControls
		enableDamping
		minPolarAngle={Math.PI * (1 / 4)}
		maxPolarAngle={Math.PI * (1 / 3)}
	/></T.PerspectiveCamera
>

<T.AmbientLight color="#ffffff" intensity={0.5} />
<T.DirectionalLight color="#ffffff" intensity={0.5} position={[0, 1, 0]} />
<T.Mesh rotation.x={Math.PI / 2} position={[0, 0, 0]}>
	<T.BoxGeometry args={[1, 1, 0.05, 10]} />
	<T.MeshLambertMaterial color="#4c0519" />
</T.Mesh>

{#each boxes as box, i}
	<T.Mesh position={[0, 0, i * 0.1]}>
		<T.BoxGeometry args={[1, 1, 0.05, 10]} />
		<T.MeshLambertMaterial color="#e11d48" />
	</T.Mesh>
{/each}
